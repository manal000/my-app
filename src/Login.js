import "./Login.css";

function Login() {
    return (
      <div >
        
  
          <div className="bg-Form"> </div>
  <img src="/Logo1.png" class="Logo1" ></img>
          <p class="welcome">BIENVENUE CHEZ BARID AL-MAGHRIB DISTRIBUTION  ! <b class="login">CONNECTER-VOUS</b> </p>
  
          <div class="vl"></div>
  
         <form>
          <label class="fuser">Nom d'utilisateur :</label><br/>

          <input type="text" id="fuser" name="fuser" value=""></input><br/>

          <label class="fmdp">Mot de passe :</label><br/>
          <input type="text" id="fmdp" name="fmdp" value=""></input><br/>
          <input type="submit" id="button-login" value ="Se connecter" ></input>
         
      </form>
       
  
        
      </div>
    );
  }
  
  export default Login;