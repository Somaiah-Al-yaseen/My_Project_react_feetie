<?php include '../db.php' ?>

<?php 
if (isset($_GET['id'])) {
    $id = $_GET['id'];

    $sql = 'DELETE FROM categories WHERE CategoryID = :id';

    $statement = $pdo->prepare($sql);
    $statement->bindParam(':id', $id, PDO::PARAM_INT);
    
   $statement->execute();
}
?>