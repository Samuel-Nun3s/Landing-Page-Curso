<?php
    require_once('mailer/PHPMailer.php');
    require_once('mailer/SMTP.php');
    require_once('mailer/Exception.php');

    $data = json_decode(file_get_contents("php://input"));

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;

    $name = $data->name;
    $to = $data->email;

    $mail = new PHPMailer(true);
    try {
        $mail->SMTPDebug = SMTP::DEBUG_SERVER;
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'samuel.landing.test@gmail.com';
        $mail->Password = 'nnbz efvl vcxt cdlw';
        $mail->Port = 587;

        $mail->setFrom('samuel.landing.test@gmail.com');
        $mail->addAddress("$to");

        $mail->isHTML(true);
        $mail->Subject = 'Vaga Reservada com Sucesso no Curso de Programação Full Stack!';
        $mail->Body = "<p>Olá $name,</p>
            <br>
            <p>Parabéns! Sua vaga no Curso Completo de <strong>Programação Full Stack</strong> foi reservada com sucesso! Estamos muito felizes em tê-lo(a) a bordo nesta jornada de aprendizado e desenvolvimento.</p>
            <br>
            <p>Detalhes do Curso:<br>
            📚 Curso: Programação Full Stack<br>
            📅 Início das Aulas: 30/02/2035";
        $mail->AltBody = 'Olá $name,

            Parabéns! Sua vaga no Curso Completo de Programação Full Stack foi reservada com sucesso! Estamos muito felizes em tê-lo(a) a bordo nesta jornada de aprendizado e desenvolvimento.

            Detalhes do Curso:
            📚 Curso: Programação Full Stack
            📅 Início das Aulas: 30/02/2035';

        if ($mail->send()) {
            echo json_encode(["message" => "Sucesso ao enviar o Email!"]);
        } else {
            echo json_encode(["message" => "Erro ao enviar o Email!"]);
        }

    } catch (Exception $e) {
        echo "Erro ao enviar mensagem: {$mail->ErrorInfo}";
    }
    
?>
