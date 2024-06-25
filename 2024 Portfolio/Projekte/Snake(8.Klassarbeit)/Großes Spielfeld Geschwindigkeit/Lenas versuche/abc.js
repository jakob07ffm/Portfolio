
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="utf-8">
  <title>externes JavaScript in HTML einbinden</title>
</head>
<body>
  <script language="JavaScript">
import javax.swing.ImageIcon;
import javax.swing.JOptionPane;

public class EingabefensterClass {

    public static void main(String[] args) {
        showDialogs();
    }
    
    public static void showDialogs() {
        JOptionPane.showInputDialog(null, "Bitte etwas eingeben");

        Object[] obj={"Bananen","Birnen","Kirschen"}; 
        ImageIcon icon = new ImageIcon("bild.jpg");
        Object antwort = JOptionPane.showInputDialog(null, "Obst gewünscht?", "Eingabefenster",
                JOptionPane.INFORMATION_MESSAGE, icon, obj,"Birnen");

        if (antwort.equals("Bananen")) {
            System.out.println("Alles Banane!");
        } else if (antwort.equals("Birnen")) {
            System.out.println("Die Birne aus Oggersheim!");
        } else if (antwort.equals("Kirschen")) {
            System.out.println("Kirschen bitte!");
        }
    }
}
</script>
    
  
</body>
</html>