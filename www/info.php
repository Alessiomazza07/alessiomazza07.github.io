<?php
/**
 * Pagina di informazioni PHP
 * Mostra la configurazione del server PHP
 */

// Intestazione della pagina
echo "<!DOCTYPE html>
<html lang='it'>
<head>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>Informazioni PHP - ALESSIO MAZZA</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f5f5f5;
        }
        .header {
            background: #2c3e50;
            color: white;
            padding: 15px;
            border-radius: 5px;
            margin-bottom: 20px;
        }
        .info-box {
            background: white;
            padding: 15px;
            margin: 10px 0;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
    </style>
</head>
<body>
    <div class='header'>
        <h1>ℹ️ Informazioni PHP</h1>
        <p>Configurazione del server PHP per ALESSIO MAZZA</p>
    </div>
    
    <div class='info-box'>
        <h2>📊 Dati Studente</h2>
        <p><strong>Nome:</strong> ALESSIO MAZZA</p>
        <p><strong>Classe:</strong> 5CINF</p>
        <p><strong>Username:</strong> mazza.alessio</p>
        <p><strong>Data generazione:</strong> " . date('d/m/Y H:i:s') . "</p>
    </div>
    
    <div class='info-box'>
        <h2>⚙️ Configurazione PHP</h2>
        <p>Di seguito sono riportate le informazioni complete sulla configurazione PHP:</p>
    </div>
";

// Mostra le informazioni PHP
phpinfo();

// Chiusura della pagina
echo "
</body>
</html>";
?>
