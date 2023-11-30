<?php include '../db.php'?>

<?php 
if (isset($_GET['id'])) {
   
    $id = $_GET['id'];
}
if(isset($_POST)){

    $data = file_get_contents("php://input");

    $admin = json_decode($data , true);

    $Fname = $admin['Fname'];
    $Lname = $admin['Lname'];
    $password = $admin['password'];
    $email = $admin['email'];

    


}else{
    die('nothing to insert');
}

$stmt = $pdo->prepare("UPDATE admins SET Fname = :Fname, Lname = :Lname, email = :email, password = :password WHERE id = :id");
$stmt->bindParam(':Fname', $Fname);
$stmt->bindParam(':Lname', $Lname);
$stmt->bindParam(':email', $email);
$stmt->bindParam(':password', $password);
$stmt->bindParam(':id', $id);
$stmt->execute();
?>