<?php include '../db.php' ?>

<?php 
if (isset($_GET['id'])) {
    $id = $_GET['id'];
} else {
    echo "No ID provided.";
    exit; 
}

if (isset($_FILES["image"])) {
    $file = $_FILES["image"];

    if ($file["error"] === UPLOAD_ERR_OK) {
        $uploadDirectory = '../../front-end/public/images/';
        $uniqueFilename = $file["name"];
        $targetFilePath = $uploadDirectory . $uniqueFilename;
        
        $imageInfo = getimagesize($file["tmp_name"]);
        if (!$imageInfo) {
            echo "The uploaded file is not a valid image.";
            exit; 
        }

        if (move_uploaded_file($file["tmp_name"], $targetFilePath)) {
            echo "File uploaded successfully. Stored as: " . $uniqueFilename;

            $stmt = $pdo->prepare("UPDATE products SET ProductName = :name, Description = :description, Price = :price, CategoryID = :category, StockQuantity = :quantity, Image = :image, Sales = :sales WHERE ProductID = :id");
            
            $name = $_POST['name'];
            $description = $_POST['description'];
            $price = $_POST['price'];
            $category_id = $_POST['category']; 
            $quantity = $_POST['quantity']; 
            $sales = $_POST['sales']; 
            
            $stmt->bindParam(':name', $name);
            $stmt->bindParam(':description', $description);
            $stmt->bindParam(':price', $price);
            $stmt->bindParam(':category', $category_id);
            $stmt->bindParam(':quantity', $quantity);
            $stmt->bindParam(':image', $uniqueFilename);
            $stmt->bindParam(':sales', $sales);
            $stmt->bindParam(':id', $id);

            if ($stmt->execute()) {
                echo "Data inserted into the database successfully.";
            } else {
                echo "Database error: " . implode(" - ", $stmt->errorInfo());
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
