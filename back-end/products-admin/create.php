<?php include '../db.php'?>
<?php 
if (isset($_FILES["image"]) && isset($_FILES["image"]["error"])) {
    $file = $_FILES["image"];

    if ($file["error"] === UPLOAD_ERR_OK) {
        $uploadDirectory = '../../front-end/public/images/';

        $uniqueFilename = $file["name"];

        $targetFilePath = $uploadDirectory . $uniqueFilename;

        if (move_uploaded_file($file["tmp_name"], $targetFilePath)) {
            echo "File uploaded successfully. Stored as: " . $uniqueFilename;

            $stmt = $pdo->prepare("INSERT INTO products (ProductName, Description, Price, CategoryID , StockQuantity , 	Image , Sales) VALUES (:name, :description, :price, :category, :quantity , :image , :sales)");
            $name = $_POST['name'];
            $description = $_POST['description'];
            $price = $_POST['price'];
            $category_id = $_POST['category']; 
            $quantity = $_POST['quantity']; 
            $sales = $_POST['sales']; 
            var_dump($name);
            $stmt->bindParam(':name', $name);
            $stmt->bindParam(':description', $description);
            $stmt->bindParam(':price', $price);
            $stmt->bindParam(':category', $category_id);
            $stmt->bindParam(':quantity', $quantity);
            $stmt->bindParam(':image', $uniqueFilename);
            $stmt->bindParam(':sales', $sales);
   

            if ($stmt->execute()) {
                echo "Data inserted into the database successfully.";
            } else {
                echo "Error inserting data into the database.";
            }
        } else {
            echo "Sorry, there was an error uploading your file.";
        }
    } else {
        echo "Upload error. Error code: " . $file["error"];
    }
} else {
    echo "No file uploaded.";
}
?>