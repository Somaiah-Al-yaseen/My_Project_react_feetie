<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-type: application/json");
require_once '../db.php'; // Include your database connection code



$response=array();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $data = json_decode(file_get_contents("php://input"));
    $id = $data->id;

    // Assuming you have a PDO connection object named $pdo
    $sql = "SELECT cart.cartId, cart.ProductId, cart.Qunatity, products.ProductName, products.Price, products.Image, products.sales
            FROM products
            JOIN cart ON cart.ProductId = products.ProductID
            WHERE cart.UserId = :id AND cart.IsOrderd = 0";

    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':id', $id, PDO::PARAM_INT);
    $stmt->execute();

    $response = array();

    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        $response[] = $row;
    }

    echo json_encode($response);
}


?>