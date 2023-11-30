<?php include '../db.php'?>
<?php 
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

$stmt = $pdo->prepare("INSERT INTO admins (Fname, Lname, email, password) VALUES (:Fname, :Lname, :email, :password)");
$stmt->bindParam(':Fname', $Fname);
$stmt->bindParam(':Lname', $Lname);
$stmt->bindParam(':email', $email);
$stmt->bindParam(':password', $password);
$stmt->execute();
?>