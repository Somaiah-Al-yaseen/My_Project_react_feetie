<?php
include '../db.php'; 

$data = json_decode(file_get_contents('php://input'));

if ($data && isset($data->email) && isset($data->password)) {
    $stmt = $pdo->prepare("SELECT * FROM admins WHERE email = :email AND password = :password");
    $stmt->bindParam(':email', $data->email, PDO::PARAM_STR);
    $stmt->bindParam(':password', $data->password, PDO::PARAM_STR);
    $stmt->execute();
    
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    if (!empty($result)) {
        echo json_encode($result);
    } else {
        echo json_encode(array('error' => 'Invalid email or password.'));
    }
} else {
    echo json_encode(array('error' => 'Invalid or missing email/password data.'));
}
?>
