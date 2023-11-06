let isHidden = false;
burgermenu.onclick = function myFunction1(){
    var x = document.getElementById("mytopnav");

    if (x.className ==="navbar"){
        x.className +="-responsive";
    } else{
        x.className = "navbar";
    }
    var myBlock = document.getElementById("car");
    
    
    if (isHidden) {
        myBlock.style.display = 'block'; 
      } else {
        myBlock.style.display = 'none';
      }
      isHidden = !isHidden;
}


const textElement = document.getElementById('commentar');
const nameElement = document.getElementById('name');
const profile1 = document.querySelectorAll('.profile1');
const profile2 = document.querySelectorAll('.profile2');
const profile3 = document.querySelectorAll('.profile3');
const profile4 = document.querySelectorAll('.profile4');
const borderElement = document.getElementById('team-com');
const colors = ['#FC5F45', '#38C695', '#B27CF5', '#FEB960'];

var dict = {
    "Michael Schmitt": "In my role as a Founder & SEO specialist, I find immense satisfaction and purpose. Being a founder allows me to shape the company's vision, drive innovation, and foster a dynamic work environment. Witnessing the growth and success of the company as a result of collective efforts is truly fulfilling. As an SEO specialist, I'm passionate about deciphering the intricacies of search algorithms and crafting strategies that propel our online presence. I firmly believe that organic growth is the cornerstone of sustainable success in the digital era. Seeing our website climb the ranks and connect with a wider audience validates the impact of our efforts.",
    "Dawid Kramer": "As a lead developer, I aspire for our code to be not only efficient but also elegant. I believe in the importance of continuous learning and open knowledge sharing with colleagues. I consider interaction and collaboration within the team to be key factors in achieving outstanding results. My goal is to not only create products but also inspire other team members to strive for excellence. The development process, for me, is not just a routine task; it's a creative approach to solving complex problems and enhancing user experiences.",
    "Anna Schroder": "Interacting with other team members helps me better understand the needs and goals of the project. I am confident that good design starts with thorough analysis and discussion, ultimately leading to creative solutions that align with our objectives. The design process is a constant journey of exploration and refinement. I believe that design holds the power to not only enhance the product's aesthetics but also to create emotional and functional interactions. My work is my passion, and I take pride in the opportunity to make a significant contribution to the success and visual perception of our projects.",
    "Jason Teichmann": "As a consultant, I derive immense satisfaction from the opportunity to provide meaningful support and influence. My goal is to assist clients in achieving their business objectives by offering expert knowledge and a strategic perspective on issues. Each project presents a new challenge that demands deep analysis and innovative approaches. Collaborating with clients fosters mutual learning and growth. Relationships built on trust and partnership create a productive platform for achieving shared goals. My role as a consultant entails continuous development and a drive to impact the success of businesses. I take pride in being a resource for clients, providing them with necessary insights and helping them effectively tackle challenges and realize their strategic ambitions."
}

profile1.forEach((block) => {
    block.addEventListener('mouseenter', () => {
        nameElement.textContent = `Michael Schmitt`;
        textElement.textContent = `${dict["Michael Schmitt"]}`;
        borderElement.style.border = "3px solid #FC5F45";
        const linkElements = document.querySelectorAll('.original');
        linkElements.forEach((linkElement) => {
            linkElement.addEventListener('mouseenter', () => {
                linkElement.style.color = colors[0];
            });

            linkElement.addEventListener('mouseleave', () => {
                linkElement.style.color = '#616161';
            });
        });
        
    });
});

profile2.forEach((block) => {
    block.addEventListener('mouseenter', () => {
        nameElement.textContent = `Dawid Kramer`;
        textElement.textContent = `${dict["Dawid Kramer"]}`;
        borderElement.style.border = "3px solid #38C695"; 
        const linkElements = document.querySelectorAll('.original');
        linkElements.forEach((linkElement) => {
            linkElement.addEventListener('mouseenter', () => {
                linkElement.style.color = colors[1];
            });

            linkElement.addEventListener('mouseleave', () => {
                linkElement.style.color = '#616161';
            });
        });
        
    });
});

profile3.forEach((block) => {
    block.addEventListener('mouseenter', () => {
        nameElement.textContent = `Anna Schroder`;
        textElement.textContent = `${dict["Anna Schroder"]}`;
        borderElement.style.border = "3px solid #B27CF5";
        const linkElements = document.querySelectorAll('.original');
        linkElements.forEach((linkElement) => {
            linkElement.addEventListener('mouseenter', () => {
                linkElement.style.color = colors[2];
            });

            linkElement.addEventListener('mouseleave', () => {
                linkElement.style.color = '#616161';
            });
        });
        
    });
});

profile4.forEach((block) => {
    block.addEventListener('mouseenter', () => {
        nameElement.textContent = `Jason Teichmann`;
        textElement.textContent = `${dict["Jason Teichmann"]}`;
        borderElement.style.border = "3px solid #FEB960";
        const linkElements = document.querySelectorAll('.original');
        linkElements.forEach((linkElement) => {
            linkElement.addEventListener('mouseenter', () => {
                linkElement.style.color = colors[3];
            });

            linkElement.addEventListener('mouseleave', () => {
                linkElement.style.color = '#616161';
            });
        });
        
    });
});

var information = {
    "1": ["Współpraca z firmą Versus to była trafna decyzja. Potrzebowaliśmy odświeżenia naszej strony internetowej i optymalizacji SEO. Efekty były rewelacyjne. Teraz nasza firma widoczna jest w sieci, a liczba klientów zwiększyła się o 40%. Polecam Versus każdemu, kto chce poprawić swoją obecność online.", "Krzysztof", "Krzysztof Nowak", "właściciel firmy budowlanej"],
    "2": ["Praca z agencją Versus przekroczyła moje oczekiwania. Dostarczyliśmy im projekt naszego nowego sklepu internetowego, a oni zrealizowali go dokładnie, z dbałością o najmniejsze szczegóły. Dzięki ich pomocy, nasz sklep działa płynnie i wygląda niesamowicie. Bardzo polecam Versus wszystkim przedsiębiorcom online.", "Agata", "Agata Kowalska", "właścicielka sklepu internetowego"],
    "3": ["Nasz zespół korzysta z usług Versus od kilku lat i nie przestajemy być z nimi zadowoleni. Ich wiedza w zakresie SEO i SEM jest imponująca, a wyniki ich działań są widoczne w każdym raporcie. Współpraca z nimi to była najlepsza decyzja, jaką mogliśmy podjąć w kwestii marketingu internetowego.", "Tomasz", "Tomasz Wójcik", "dyrektor marketingu"],
    "4": ["Dla mnie Versus to pewność, że moja kawiarnia jest widoczna online. Ich zespół pomógł mi w ulepszeniu strony internetowej, a także w zarządzaniu reklamami online. Efekty przerosły moje oczekiwania, a przychody zwiększyły się znacząco. To najlepsza agencja SEO i SEM, jaką kiedykolwiek miałam przyjemność poznać.", "Elżbieta", "Elżbieta Majewska", "właścicielka kawiarni"],
    "5": ["Versus to partner, na którym można polegać. Nasza agencja nieruchomości potrzebowała wsparcia w zakresie SEO, i Versus dostarczyli nam dokładnie to, czego potrzebowaliśmy. Nasza widoczność online wzrosła, a nowi klienci łatwiej nas znajdują. Szczerze polecam tę agencję każdemu biznesowi.", "Marek", "Marek Kowalczyk", "właściciel agencji nieruchomości"],
    "6": ["Versus to zespół ekspertów, którzy zrewolucjonizowali nasz e-commerce. Ich umiejętność łączenia strategii SEO i SEM przyniosła nam imponujące rezultaty. Zaufaliśmy im, a oni dostarczyli nam zwiększoną sprzedaż i wzrost przychodów. Nie mogłam być bardziej zadowolona z wyników.", "Katarzyna", "Katarzyna Wiśniewska", "dyrektor działu e-commerce"]
}

function changeText(num) {
    const paragraph = document.getElementById('par-think');
    const podpis = document.getElementById('podpis-think');
    const name = document.getElementById('name-think');
    const location = document.getElementById('loc-think');
    paragraph.textContent = information[num][0];
    podpis.textContent = information[num][1];
    name.textContent = information[num][2];
    location.textContent = information[num][3];

}



var link = document.getElementById("myLink");
var div = document.getElementById("myDiv");
var video = document.getElementById("myVideo");

link.addEventListener("click", function(event) {
    event.preventDefault();
    
    if (div.style.display === "none") {
        div.style.display = "flex";
        
        video.pause();
        video.currentTime = 0;
    } else {
        div.style.display = "none";
        
        video.play();
    }
});

video.addEventListener("ended", function() {
    div.style.display = "flex";
});

video.addEventListener("pause", function() {
    div.style.display = "flex";
});


var link1 = document.getElementById("myLink1");
var div1 = document.getElementById("myDiv1");
var video1 = document.getElementById("myVideo1");

link1.addEventListener("click", function(event) {
    event.preventDefault();
    
    if (div1.style.display === "none") {
        div1.style.display = "flex";
        
        video1.pause();
        video1.currentTime = 0;
    } else {
        div1.style.display = "none";
        
        video1.play();
    }
});

video1.addEventListener("ended", function() {
    div1.style.display = "flex";
});

video1.addEventListener("pause", function() {
    div1.style.display = "flex";
});

var link2 = document.getElementById("myLink2");
var div2 = document.getElementById("myDiv2");
var video2 = document.getElementById("myVideo2");

link2.addEventListener("click", function(event) {
    event.preventDefault();
    
    if (div2.style.display === "none") {
        div2.style.display = "flex";
        
        video2.pause();
        video2.currentTime = 0;
    } else {
        div2.style.display = "none";
        
        video2.play();
    }
});

video2.addEventListener("ended", function() {
    div2.style.display = "flex";
});

video2.addEventListener("pause", function() {
    div2.style.display = "flex";
});



document.onclick = function(event) {
    var target = event.target;
    var id = target.getAttribute('data-toggle-id');
    if (!id) return;
    var elem = document.getElementById(id);
  
    if (elem.style.display === 'none' || elem.style.display === '') {
      elem.style.display = 'block';
      elem.style.maxHeight = elem.scrollHeight + 'px';
    } else {
      elem.style.maxHeight = '0';
      setTimeout(function() {
        elem.style.display = 'none';
      }, 500); 
    }
  };