<?php include_once('./components/helper.php'); ?>

<!doctype html>
<html lang="en">
<?php include_once('./components/head.php'); ?>

<body class="bg-gray-600 w-4/5 mx-auto">
    <?php include_once('./components/header.php'); ?>
    <div class="bg-gray-300 border-l border-r border-b border-black flex flex-col">
        <div class="mx-2">
            <div id="report-img" class="mx-auto p-3"></div>
        </div>
        <div class="mx-4 border border-black">
            <h1 class="col-lg-12 p-3 display-6"><strong>Additional Information</strong></h1>
        </div>
        <div class="mx-2">
            <div id="report-static-img" class="mx-auto p-3"></div>
        </div>
    </div>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>

    <script src="dist/main.js" type="text/javascript"></script>
    <script src="<?php echo $curScript; ?>" type="text/javascript"></script>
</body>

</html>