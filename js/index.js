(function(){
	
	//Inicializando firebase
	var config = {
		apiKey: "AIzaSyBPiAXn4T-VoLJgeTHYTSDwKsv2g4lwwWY",
		authDomain: "lojatog.firebaseapp.com",
		databaseURL: "https://lojatog.firebaseio.com",
		projectId: "lojatog",
		storageBucket: "lojatog.appspot.com",
		messagingSenderId: "719973846950"
	};
	firebase.initializeApp(config);
		
	//Pegando elementos
	const txtEmail = document.getElementById('txtEmail');
	const txtPassword = document.getElementById('txtPassword');
	const btnSignUp = document.getElementById('btnSignUp');
	const btnLogin = document.getElementById('btnLogin');
	
	//Add evento login
	btnLogin.addEventListener('click', e=>{
		//Pegando email e senha
		const email = txtEmail.value;
		const pass = txtPassword.value;
		const auth = firebase.auth();
		//Autenticação de login
		const promise = auth.signInWithEmailAndPassword(email, pass);
		promise.catch(e => console.log(e.message));
		alert("Logado!")
	});
	
	//Add evento cadastrar
	btnSignUp.addEventListener('click', e =>{
		//Pegando email e senha
		const email = txtEmail.value;
		const pass = txtPassword.value;
		const auth = firebase.auth();
		//Autenticação de login
		const promise = auth.createUserWithEmailAndPassword(email, pass);
		promise
			.catch(e => console.log(e.message));
		alert("Cadastrado!")
	});
	firebase.auth().onAuthStateChanged(firebaseUser =>{
		if(firebaseUser){
			console.log(firebaseUser);
		}else{
			console.log('Erro!');
		}
	})
}());