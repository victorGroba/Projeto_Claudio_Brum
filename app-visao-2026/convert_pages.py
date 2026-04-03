import os
import re

html_dir = '../site/public'
app_dir = 'src/app'

pages = {
    'index.html': 'page.tsx',
    'metodo.html': 'metodo/page.tsx',
    'professores.html': 'professores/page.tsx',
    'planos.html': 'planos/page.tsx',
    'checkout.html': 'checkout/page.tsx',
    'quem-somos.html': 'quem-somos/page.tsx'
}

def extract_main_content(html):
    # Try to find content between nav/header and footer
    # For index.html specifically: 
    # It has <nav> and <header>. The content is from <header> to just before <footer>
    # Actually, we can just grab everything inside <body>, then remove <nav>, <div sticky top-0>, <footer>, <script>, and <div fixed bottom-0> (mobile nav).
    
    # Extract body content
    body_match = re.search(r'<body[^>]*>(.*?)</body>', html, re.DOTALL | re.IGNORECASE)
    if not body_match: return ""
    content = body_match.group(1)
    
    # Remove Scripts
    content = re.sub(r'<script.*?</script>', '', content, flags=re.DOTALL | re.IGNORECASE)
    # Remove Navs and Footers since we have global components
    content = re.sub(r'<nav.*?</nav>', '', content, flags=re.DOTALL | re.IGNORECASE)
    content = re.sub(r'<footer.*?</footer>', '', content, flags=re.DOTALL | re.IGNORECASE)
    
    # Remove the top sticky banner (countdown) if present
    content = re.sub(r'<div class="sticky top-0 z-50 bg-accent.*?(?:</div>)', '', content, flags=re.DOTALL | re.IGNORECASE)
    
    # For pages that came from Stitch and have that top header back arrow 'sticky top-0 z-50 border-b'
    content = re.sub(r'<div class="flex items-center bg-background-[^>]*sticky top-0 z-50[^>]*>.*?</div>\s*</div>\s*</div>', '', content, flags=re.DOTALL | re.IGNORECASE) # This might be too greedy, let's just remove the first div
    
    # A safer way: remove specific header
    content = re.sub(r'<div class="flex items-center bg-background-[^>]*sticky top-0 z-50 border-b[^>]*>.*?<span class="material-symbols-outlined.*?>share.*?</div>\s*</div>', '', content, flags=re.DOTALL | re.IGNORECASE)
    
    # Remove bottom navigation from Stitch mobile
    content = re.sub(r'<div class="fixed bottom-0 left-0 right-0 z-50[^>]*>.*?</div>', '', content, flags=re.DOTALL | re.IGNORECASE)
    content = re.sub(r'<div class="h-20 bg-background-dark[^>]*>.*?</div>', '', content, flags=re.DOTALL | re.IGNORECASE)

    # For safety, on index.html, keep header.
    # Convert HTML to JSX
    content = content.replace('class=', 'className=')
    content = content.replace('for=', 'htmlFor=')
    content = content.replace('<!--', '{/*')
    content = content.replace('-->', '*/}')
    
    # Fix style attributes which need objects in React
    content = re.sub(r'style=[\'"]([^\'"]*)[\'"]', '{}', content) # Simplification: strip styles or convert (we will just strip them for now, most logic is tailwind)
    # Actually, background images need style={{ backgroundImage: "url(...)" }}
    def style_replacer(match):
        style_str = match.group(1)
        if 'background-image' in style_str:
            bg_url = re.search(r'url\((.*?)\)', style_str)
            if bg_url:
                url = bg_url.group(1).replace('\"', "'")
                return f'style={{{{ backgroundImage: `url({url})` }}}}'
        return ''
    content = re.sub(r'style=[\'"]([^\'"]*)[\'"]', style_replacer, content)

    # Self close tags
    content = re.sub(r'<img([^>]*?)(?<!/)>', r'<img\1 />', content, flags=re.IGNORECASE)
    content = re.sub(r'<input([^>]*?)(?<!/)>', r'<input\1 />', content, flags=re.IGNORECASE)
    content = re.sub(r'<br([^>]*?)(?<!/)>', r'<br />', content, flags=re.IGNORECASE)
    content = re.sub(r'<hr([^>]*?)(?<!/)>', r'<hr />', content, flags=re.IGNORECASE)
    
    # Replace `<a href="file.html">` to `<Link href="/file">`
    # Replace `checkout.html` -> `/checkout`, `metodo.html` -> `/metodo`, etc.
    content = re.sub(r'<a([^>]+)href="(?!http)([^"]+)\.html"([^>]*)>', r'<Link\1href="/\2"\3>', content, flags=re.IGNORECASE)
    content = re.sub(r'<a([^>]+)href="(?!http)([^"]+)"([^>]*)>', r'<Link\1href="\2"\3>', content, flags=re.IGNORECASE) # Catch other local links
    content = content.replace('</a', '</Link')

    # Add missing closing tags if any, but since these were valid HTML5, standard JSX conversion should be close.
    # We will wrap it in a Fragment
    return f"import Link from 'next/link';\n\nexport default function Page() {{\n  return (\n    <>\n{content}\n    </>\n  );\n}}"

for html_file, tsx_path in pages.items():
    source = os.path.join(html_dir, html_file)
    target = os.path.join(app_dir, tsx_path)
    
    if os.path.exists(source):
        with open(source, 'r', encoding='utf-8') as f:
            html = f.read()
            
        jsx = extract_main_content(html)
        
        os.makedirs(os.path.dirname(target), exist_ok=True)
        with open(target, 'w', encoding='utf-8') as f:
            f.write(jsx)
        print(f"Created {target}")
