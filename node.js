<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Shop Me</title>
    <link rel="stylesheet" href="style.css">
    <!-- Basic Icons -->
    <link href="https://cdn.boxicons.com/3.0.8/fonts/basic/boxicons.min.css" rel="stylesheet">
    <!-- Filled Icons -->
    <link href="https://cdn.boxicons.com/3.0.8/fonts/filled/boxicons-filled.min.css" rel="stylesheet">
    <!-- Brand Icons -->
    <link href="https://cdn.boxicons.com/3.0.8/fonts/brands/boxicons-brands.min.css" rel="stylesheet">
</head>
<body>
    <form class="container">
        <h1 class="header">login</h1>
        
        <div class="username">
            <i class="bx bx-user"></i>
            <div class="inputbox">
                <input type="text" id="userInput" placeholder=" " required>
                <label for="userInput">username</label>
            </div>
        </div>

        <div class="password">
            <i class="bx bx-lock-keyhole-open bx-remove-padding"></i>
            <div class="inputbox">
                <input type="password" id="passInput" placeholder=" " required>
                <label for="passInput">password</label>
            </div>
        </div>

        <div class="loger">
            <input type="button" value="login">
        </div>
    </form>
    <script src="script.js"></script>
</body>
</html>
