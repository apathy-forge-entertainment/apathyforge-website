<html>
    <head>
        <title>PHP Test</title>
    </head>
    <body>
    <p>Greetings Friend!</p>
    <?php echo '<p>This message and all that come after it were generated by php scripts</p>'; ?>
    <?php
        $x = 5;
        echo "<p>The value of x is: " . $x . "</p>";
        for($counter = 0; $counter < 5; $counter++)
        {
            $x--;
        }
        echo "<p>After the for loop the new value of x is: " . $x . "</p>";
    ?>

    </body>
</html>