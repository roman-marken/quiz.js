// Модуль для роботи зі студентами
const StudentModule = {
	students: [
		{ name: "name1", points: 0 },
		{ name: "name2", points: 0 },
		{ name: "name3", points: 0 },
		{ name: "name4", points: 0 },
		{ name: "name5", points: 0 },
		{ name: "name6", points: 0 },
		{ name: "name7", points: 0 },
		{ name: "name8", points: 0 },
		{ name: "name9", points: 0 },
		{ name: "name10", points: 0 },
		{ name: "name11", points: 0 },
		{ name: "name12", points: 0 },
		{ name: "name13", points: 0 },
		{ name: "name14", points: 0 },
		{ name: "name15", points: 0 },
	],

	currentStudent: null,

	createStudentList() {
			const studentList = document.getElementById("studentList");
			studentList.innerHTML = ""; 

			this.students.forEach(student => {
					const button = document.createElement("button");
					button.textContent = student.name;
					button.addEventListener("click", () => {
							this.currentStudent = student;
							this.updateRanking();
					});
					studentList.appendChild(button);
			});
	},

	updateRanking() {
			const chosen = document.getElementById("chosen");
			const rankingTable = document.getElementById("rankingTable");

			if (this.currentStudent) {
					chosen.textContent = `${this.currentStudent.name}, Балів: ${this.currentStudent.points}`;
			} else {
					chosen.textContent = '';
			}

			const tableBody = rankingTable.querySelector("tbody");
			tableBody.innerHTML = '';

			this.students
					.filter(student => student.points > 0)
					.sort((a, b) => b.points - a.points)
					.forEach(student => {
							const row = tableBody.insertRow();
							row.setAttribute('data-student-name', student.name);
							const nameCell = row.insertCell(0);
							const pointsCell = row.insertCell(1);
							nameCell.textContent = student.name;
							pointsCell.textContent = student.points;
					});
	},

	shuffleStudents() {
			for (let i = this.students.length - 1; i > 0; i--) {
					const j = Math.floor(Math.random() * (i + 1));
					[this.students[i], this.students[j]] = [this.students[j], this.students[i]];
			}
			this.createStudentList();
	}
};

// Модуль для роботи з питаннями
const QuestionModule = {
	questions: [
		{
			question: "Який тег використовується для визначення заголовка сторінки?",
			answers: ["<title>", "<header>", "<h1>", "<meta>"],
			correct: 0,
			difficulty: 1
		},
		{
			question: "Який тег додає горизонтальну лінію на сторінку?",
			answers: ["<br>", "<hr>", "<strong>", "<footer>"],
			correct: 1,
			difficulty: 1
		},
		{
			question: "Який тег використовується для найвищого заголовка в HTML?",
			answers: ["<h1>", "<title>", "<header>", "<h6>"],
			correct: 0,
			difficulty: 1
		},
		{
			question: "Яким тегом можна створити абзац в HTML?",
			answers: ["<div>", "<span>", "<section>", "<p>"],
			correct: 3,
			difficulty: 1
		},
		{
			question: "Який атрибут визначає альтернативний текст для зображення?",
			answers: ["alt", "src", "title", "href"],
			correct: 0,
			difficulty: 1
		},
		{
			question: "Вітаю, це щаслива картка ;-)",
			answers: ["Закрити"],
			correct: 0,
			difficulty: 0
		},
		{
			question: "Який атрибут додається до тега <img> для визначення шляху до зображення?",
			answers: ["alt", "href", "src", "width"],
			correct: 2,
			difficulty: 1
		},
		{
			question: "Який атрибут тега <img> визначає ширину зображення?",
			answers: ["width", "height", "src", "alt"],
			correct: 0,
			difficulty: 1
		},
		{
			question: "Який тег використовується для створення посилання в HTML?",
			answers: ["<link>", "<a>", "<button>", "<url>"],
			correct: 1,
			difficulty: 1
		},
		{
			question: "Для чого використовується атрибут id в HTML?",
			answers: [
				"Для стилізації елемента",
				"Для створення унікального ідентифікатора елемента",
				"Для додавання класу до елемента",
				"Для створення підказки до елемента"
			],
			correct: 1,
			difficulty: 1
		},
		{
			question: "Що робить тег <strong> в HTML?",
			answers: ["Виділяє текст курсивом", "Зробить текст жирним і важливим", "Змінює колір тексту", "Зробить текст жирним"],
			correct: 1,
			difficulty: 1
		},
		{
			"question": "Що робить тег <em> в HTML?",
			"answers": ["Робить текст жирним", "Змінює колір тексту", "Виділяє текст курсивом і додає значущості", "Підкреслює текст"],
			"correct": 2,
			"difficulty": 1
		},
		{
			question: "Який атрибут використовується в тезі <a> для вказання адреси сторінки, на яку веде посилання?",
			answers: ["href", "link", "url", "address"],
			correct: 0,
			difficulty: 1
		},
		{
			question: "Який тег використовується для створення рядка переходу на новий рядок?",
			answers: ["<linebreak>", "<newline>", "<return>", "<br>"],
			correct: 3,
			difficulty: 1
		},
		{
			question: "Що робить тег <button> в HTML?",
			answers: [
				"Створює поле для введення тексту",
				"Створює кнопку, яку можна натискати",
				"Додає зображення",
				"Створює посилання"
			],
			correct: 1,
			difficulty: 1
		},
		{
			question: "Для чого використовується тег <header> в HTML?",
			answers: [
				"Для додавання навігаційного меню",
				"Для створення підвалу сторінки",
				"Для створення верхнього колонтитула сторінки",
				"Для додавання основного контенту сторінки"
			],
			correct: 2,
			difficulty: 1
		},
		{
			question: "Що міститься в тезі <head> в HTML?",
			answers: [
				"Основний контент сторінки",
				"Зображення та відео",
				"Метадані документа, такі як заголовок, посилання на CSS та скрипти",
				"Футер сторінки"
			],
			correct: 2,
			difficulty: 1
		},
		{
			question: "Для чого використовується тег <section> в HTML?",
			answers: [
				"Для створення підвалу сторінки",
				"Для додавання зображень",
				"Для групування пов'язаного контенту в окремий розділ",
				"Для створення верхнього колонтитула"
			],
			correct: 2,
			difficulty: 1
		},
		{
			"question": "В якому тегу знаходиться основний контент сторінки?",
			"answers": ["<body>", "<header>", "<footer>", "<head>"],
			"correct": 0,
			"difficulty": 1
		},
		{
			question: "Для чого використовується <!DOCTYPE html> в HTML?",
			answers: [
				"Для підключення CSS-файлів",
				"Для додавання JavaScript",
				"Для оголошення типу документа та версії HTML",
				"Для створення заголовка сторінки"
			],
			correct: 2,
			difficulty: 1
		},
		{
			question: "Яка основна функція тега <footer>?",
			answers: [
				"Для додавання верхнього колонтитула",
				"Для створення підвалу сторінки або розділу",
				"Для створення навігаційного меню",
				"Для додавання основного контенту"
			],
			correct: 1,
			difficulty: 1
		},
		{
			question: "Що робить атрибут height в HTML?",
			answers: [
				"Змінює колір елемента",
				"Встановлює ширину елемента",
				"Додає тінь до елемента",
				"Встановлює висоту елемента"
			],
			correct: 3,
			difficulty: 1
		},
		{
			question: "Що є основною метою тега <div>?",
			answers: [
				"Створення посилань",
				"Додавання зображень",
				"Групування елементів у блоки",
				"Створення таблиць"
			],
			correct: 2,
			difficulty: 1
		},
		{
			question: "Який тег використовується для створення навігаційного меню?",
			answers: ["<nav>", "<menu>", "<navigation>", "<header>"],
			correct: 0,
			difficulty: 1
		},
		{
			question: "Для чого використовується тег <span> в HTML?",
			answers: [
				"Для створення блоків контенту",
				"Для додавання зображень",
				"Для створення таблиць",
				"Для виділення невеликої частини тексту або елементу"
			],
			correct: 3,
			difficulty: 1
		},
		{
			question: "Який тег використовується для визначення основного вмісту сторінки?",
			answers: ["<header>", "<nav>", "<main>", "<section>"],
			correct: 2,
			difficulty: 1
		},
		{
			question: "Який тег використовується для створення списку з маркерами?",
			answers: ["<ol>", "<ul>", "<dl>", "<li>"],
			correct: 1,
			difficulty: 1
		},
		{
			question: "Який тег використовується для створення списку елементів у порядку їх нумерації?",
			answers: ["<ul>", "<ol>", "<li>", "<menu>"],
			correct: 1,
			difficulty: 1
		},
		{
			question: "Яка різниця між <ul> і <ol>?",
			answers: [
				"<ul> створює впорядкований список, а <ol> - невпорядкований.",
				"<ol> створює впорядкований список, а <ul> - невпорядкований.",
				"Обидва створюють невпорядковані списки.",
				"Обидва створюють впорядковані списки."
			],
			correct: 1,
			difficulty: 1
		},
		{
			question: "Який тег використовується для створення елемента в списку?",
			answers: ["<ul>", "<ol>", "<li>", "<element>"],
			correct: 2,
			difficulty: 1
		},
	],

	createCards() {
			const cardContainer = document.getElementById("cardContainer");
			cardContainer.innerHTML = "";

			this.questions.forEach((question, index) => {
					const card = document.createElement("div");
					card.classList.add("card");

					const front = document.createElement("div");
					front.classList.add("front");
					front.textContent = index + 1;

					const back = document.createElement("div");
					back.classList.add("back");

					card.appendChild(front);
					card.appendChild(back);
					cardContainer.appendChild(card);

					card.addEventListener("click", () => {
							if (!StudentModule.currentStudent) {
									alert("Будь ласка, виберіть студента!");
									return;
							}
							if (!card.classList.contains("inactive")) {
									this.flipCard(card, index);
							}
					});
			});
	},

	flipCard(card, index) {
			if (!StudentModule.currentStudent) {
					alert("Будь ласка, виберіть студента!");
					return;
			}

			card.classList.add("flipped");
			document.getElementById("blurBackground").classList.add("active");

			const back = card.querySelector(".back");
			back.innerHTML = "";

			const questionData = this.questions[index];

			const questionEl = document.createElement("div");
			questionEl.classList.add("question");
			questionEl.textContent = questionData.question;

			const answersEl = document.createElement("div");
			answersEl.classList.add("answers");

			questionData.answers.forEach((answer, answerIndex) => {
					const button = document.createElement("button");
					button.textContent = answer;
					button.addEventListener("click", (event) => {
							this.checkAnswer(answerIndex, questionData, card);
							event.stopPropagation();
					});
					answersEl.appendChild(button);
			});

			const timerEl = document.createElement("div");
			timerEl.classList.add("timer");
			timerEl.textContent = `Час: 30 секунд`;

			const pointsEl = document.createElement("div");
			pointsEl.classList.add("points");
			pointsEl.textContent = `Складність: ${questionData.difficulty}`;

			back.appendChild(questionEl);
			back.appendChild(answersEl);
			back.appendChild(timerEl);
			back.appendChild(pointsEl);

			this.startTimer(timerEl, card);
	},

	startTimer(timerEl, card) {
			let timeLeft = 30;
			const interval = setInterval(() => {
					timeLeft--;
					timerEl.textContent = `Час: ${timeLeft} секунд`;

					if (timeLeft <= 0 || card.classList.contains("inactive")) {
							clearInterval(interval);
					}
			}, 1000);
	},

	checkAnswer(answerIndex, questionData, card) {
			const isCorrect = answerIndex === questionData.correct;
			if (isCorrect) {
					StudentModule.currentStudent.points += questionData.difficulty;
			}
			this.showResult(isCorrect ? "Правильна відповідь!" : "Неправильна відповідь!", isCorrect);

			card.classList.remove("flipped");
			card.classList.add("inactive");
			document.getElementById("blurBackground").classList.remove("active");
			card.querySelector(".front").textContent = "Використано";

			StudentModule.currentStudent = null;
			StudentModule.updateRanking();
	},

	showResult(message, isCorrect) {
			const resultModal = document.getElementById("resultModal");
			resultModal.innerHTML = '';

			const image = document.createElement("img");
			image.src = isCorrect ? "img/correct.webp" : "img/incorrect.webp";
			image.alt = isCorrect ? "Правильна відповідь" : "Неправильна відповідь";
			image.classList.add("result-image");

			const messageEl = document.createElement("div");
			messageEl.textContent = message;
			messageEl.classList.add("result-message");

			const closeButton = document.createElement("button");
			closeButton.textContent = "Закрити";
			closeButton.classList.add("close-button");
			closeButton.addEventListener("click", this.closeModal);

			resultModal.appendChild(image);
			resultModal.appendChild(messageEl);
			resultModal.appendChild(closeButton);

			resultModal.classList.add("active");
			document.body.classList.add("locked");
	},

	closeModal() {
			document.getElementById("resultModal").classList.remove("active");
			document.body.classList.remove("locked");
	}
};

// Ініціалізація
document.addEventListener("DOMContentLoaded", () => {
	StudentModule.createStudentList();
	QuestionModule.createCards();

	document.getElementById("shuffleStudents").addEventListener("click", () => {
			StudentModule.shuffleStudents();
	});
});