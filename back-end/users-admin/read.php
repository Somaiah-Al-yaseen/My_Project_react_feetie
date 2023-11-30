<?php include '../db.php'?>
<?php 
    $sql = 'SELECT * FROM users';
    $data = $pdo->query($sql);
    $result = $data->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($result);
?>