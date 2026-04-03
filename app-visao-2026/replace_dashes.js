const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
}

function processFile(filePath) {
    if (!filePath.endsWith('.tsx') && !filePath.endsWith('.ts')) return;
    
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;
    
    // Replace text ' - ' with ' | ' or similar in components
    content = content.replace(/tag: "Aprovado - EsPCEx"/g, 'tag: "Aprovado | EsPCEx"');
    content = content.replace(/tag: "Aprovada - EEAR"/g, 'tag: "Aprovada | EEAR"');
    content = content.replace(/tag: "Aprovado - EPCAR"/g, 'tag: "Aprovado | EPCAR"');
    content = content.replace(/tag: "Aprovada - ESA"/g, 'tag: "Aprovada | ESA"');
    content = content.replace(/tag: "Aprovada - Estados Unidos/g, 'tag: "Aprovada | Estados Unidos');
    content = content.replace(/tag: "Aprovado - Itália/g, 'tag: "Aprovado | Itália');
    content = content.replace(/tag: "Aprovado - PF"/g, 'tag: "Aprovado | PF"');
    content = content.replace(/tag: "Aprovada - Portugal/g, 'tag: "Aprovada | Portugal');
    content = content.replace(/USP - Med/g, 'USP | Med');

    // Make sure we didn't leave any Aprovado - in SocialProofSection
    content = content.replace(/Aprovado - /g, 'Aprovado | ');
    content = content.replace(/Aprovada - /g, 'Aprovada | ');
    content = content.replace(/Mãe de aluno - /g, 'Mãe de aluno | ');

    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log('Updated: ' + filePath);
    }
}

walkDir(path.join(__dirname, 'src'), processFile);
console.log('Done 2!');
