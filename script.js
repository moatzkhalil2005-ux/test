 document.addEventListener("DOMContentLoaded", function () {

    
    const h1 = document.querySelector("h1");
    if (h1) {
        const greetingBox = document.createElement("div");
        greetingBox.style.cssText = "background: #3498db; color: white; padding: 10px 15px; border-radius: 6px; margin: 15px 0; font-weight: bold;";
        
        const hours = new Date().getHours();
        if (hours < 12) {
            greetingBox.innerText = "☀️ صباح الخير يا معتز! أهلاً بك في موقعك.";
        } else if (hours < 18) {
            greetingBox.innerText = "🌤️ مساء الخير يا معتز! نورت الموقع.";
        } else {
            greetingBox.innerText = "🌙 مساء النور يا معتز! أهلاً بك في الموقع.";
        }
        
        h1.after(greetingBox);
    }

    
    const profileImg = document.getElementById("photomoatz");
    if (profileImg) {
        profileImg.style.transition = "transform 0.3s ease, border 0.3s ease";
        profileImg.style.cursor = "pointer";
        
        let isZoomed = false;
        profileImg.addEventListener("click", function () {
            if (!isZoomed) {
                this.style.transform = "scale(1.1)";
                this.style.border = "3px solid #3498db";
                isZoomed = true;
            } else {
                this.style.transform = "scale(1)";
                this.style.border = "none";
                isZoomed = false;
            }
        });
    }

    
    const tableRows = document.querySelectorAll("table tr");
    tableRows.forEach(row => {
        row.style.cursor = "pointer";
        row.addEventListener("click", function () {
            tableRows.forEach(r => r.style.backgroundColor = ""); // إعادة التعيين
            this.style.backgroundColor = "#fff9c4"; // تمييز الصف باللون الأصفر
        });
    });

});

    document.addEventListener("DOMContentLoaded", function () {

     
    function updateClock() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const clockElement = document.getElementById("clock");
        if (clockElement) {
            clockElement.innerText = `${hours}:${minutes}:${seconds}`;
        }
    }
    setInterval(updateClock, 1000);
    updateClock();

   
    const darkModeBtn = document.getElementById("darkModeBtn");
    if (darkModeBtn) {
        darkModeBtn.addEventListener("click", function () {
            document.body.classList.toggle("dark-theme");
            if (document.body.classList.contains("dark-theme")) {
                this.innerText = "☀️ الوضع الفاتح";
            } else {
                this.innerText = "🌙 الوضع الليلي";
            }
        });
    }

    
    const searchInput = document.getElementById("tableSearch");
    if (searchInput) {
        searchInput.addEventListener("keyup", function () {
            const filterValue = this.value.toLowerCase();
            const rows = document.querySelectorAll("table tr");

            rows.forEach((row, index) => {
                 
                if (index === 0 && row.querySelector("th")) return;

                const rowText = row.textContent.toLowerCase();
                if (rowText.includes(filterValue)) {
                    row.style.display = "";
                } else {
                    row.style.display = "none";
                }
            });
        });
    }

  
    const copyBtn = document.getElementById("copyEmailBtn");
    const copyToast = document.getElementById("copyToast");
    if (copyBtn) {
        copyBtn.addEventListener("click", function () {
            const email = "moatza273@gmail.com";
            navigator.clipboard.writeText(email).then(() => {
                if (copyToast) {
                    copyToast.classList.add("show");
                    setTimeout(() => copyToast.classList.remove("show"), 2000);
                }
            });
        });
    }

    
    const contactForm = document.getElementById("contactForm");
    const formFeedback = document.getElementById("formFeedback");

    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault(); // منع إعادة تحميل الصفحة

            const name = document.getElementById("userName").value.trim();
            const email = document.getElementById("userEmail").value.trim();
            const message = document.getElementById("userMessage").value.trim();

            if (name && email && message) {
                formFeedback.style.color = "#2ecc71";
                formFeedback.innerText = `شكراً لك يا ${name}! تم إرسال رسالتك بنجاح. ✨`;
                contactForm.reset();
            } else {
                formFeedback.style.color = "#e74c3c";
                formFeedback.innerText = "يرجى ملء جميع الخانات المطلوبة.";
            }
        });
    }

    
    const profileImg = document.getElementById("photomoatz");
    if (profileImg) {
        profileImg.style.transition = "transform 0.3s ease";
        profileImg.style.cursor = "pointer";
        let isZoomed = false;
        profileImg.addEventListener("click", function () {
            this.style.transform = isZoomed ? "scale(1)" : "scale(1.08)";
            isZoomed = !isZoomed;
        });
    }

}