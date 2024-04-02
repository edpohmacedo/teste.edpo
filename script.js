document.getElementById('sobreMim').addEventListener('click', function() {
    document.getElementById('sobreMimText').style.display = 'block';
    document.getElementById('formacaoText').style.display = 'none';
    document.getElementById('portfolioText').style.display = 'none';
    document.getElementById('contatoText').style.display = 'none';
});

document.getElementById('formacao').addEventListener('click', function() {
    document.getElementById('sobreMimText').style.display = 'none';
    document.getElementById('formacaoText').style.display = 'block';
    document.getElementById('portfolioText').style.display = 'none';
    document.getElementById('contatoText').style.display = 'none';
});

document.getElementById('portfolio').addEventListener('click', function() {
    document.getElementById('sobreMimText').style.display = 'none';
    document.getElementById('formacaoText').style.display = 'none';
    document.getElementById('portfolioText').style.display = 'block';
    document.getElementById('contatoText').style.display = 'none';
});

document.getElementById('contato').addEventListener('click', function() {
    document.getElementById('sobreMimText').style.display = 'none';
    document.getElementById('formacaoText').style.display = 'none';
    document.getElementById('portfolioText').style.display = 'none';
    document.getElementById('contatoText').style.display = 'block';
});
