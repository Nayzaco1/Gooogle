// تغيير اللغة بناءً على اختيار المستخدم
const translations = {
    en: {
        title: "Sign in",
        description: "Use your Google Account",
        emailPlaceholder: "Email or phone",
        passwordPlaceholder: "Enter your password",
        forgot: "Forgot email?",
        nextBtn: "Next",
        createAccount: "Create account"
    },
    fr: {
        title: "Se connecter",
        description: "Utilisez votre compte Google",
        emailPlaceholder: "E-mail ou téléphone",
        passwordPlaceholder: "Entrez votre mot de passe",
        forgot: "Mot de passe oublié ?",
        nextBtn: "Suivant",
        createAccount: "Créer un compte"
    },
    ar: {
        title: "تسجيل الدخول",
        description: "استخدم حساب Google الخاص بك",
        emailPlaceholder: "البريد الإلكتروني أو الهاتف",
        passwordPlaceholder: "أدخل كلمة المرور",
        forgot: "هل نسيت البريد الإلكتروني؟",
        nextBtn: "التالي",
        createAccount: "إنشاء حساب"
    }
};

document.getElementById("languageSelect").addEventListener("change", function () {
    let lang = this.value;
    document.getElementById("title").innerText = translations[lang].title;
    document.getElementById("description").innerText = translations[lang].description;
    document.getElementById("email").placeholder = translations[lang].emailPlaceholder;
    document.getElementById("password").placeholder = translations[lang].passwordPlaceholder;
    document.getElementById("forgot").innerText = translations[lang].forgot;
    document.getElementById("nextBtn").innerText = translations[lang].nextBtn;
    document.getElementById("createAccount").innerText = translations[lang].createAccount;
});

// دعم الوضع المظلم
const themeToggle = document.getElementById("themeToggle");
if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.body.classList.add("dark-mode");
}

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});
