const { clampValue, CONSTANTS } = require('../src/utils');
let jokes = [
	{
		"q": "Relationship status?",
		"a": "I'll leave the relations to the database.",
		"form": "qa"
	},
	{
		"q": "How do you get the code for the bank vault?",
		"a": "You checkout their branch.",
		"form": "qa"
	},
	{
		"q": "How did the developer announce their engagement?",
		"a": "They <code>return</code>ed <code>true</code>!",
		"form": "qa"
	}
		"q": "What do you call a busy waiter?",
		"a": "A server.",
		"form": "qa"
	},
]

// Max cache age (Currently = 60 seconds)
const cacheSeconds = CONSTANTS.TEN_SECONDS;

module.exports = async (req, res) => {
  /*
		let index = Math.floor(Math.random() * Object.keys(jokes).length + 1);
	*/
  let index = Math.floor(Math.random() * Object.keys(jokes).length);
  // let index = 139;

  console.log(index);

  let renderJoke = ``;

  if (jokes[index].q) {
    let question = jokes[index].q;
    let answer = jokes[index].a;
    renderJoke = `<svg width="500" fill="none" xmlns="http://www.w3.org/2000/svg">
	<foreignObject width="100%" height="100%">
		<div xmlns="http://www.w3.org/1999/xhtml">
			<style>
				.container {
					border: 2px solid #8ac926;
					border-radius: 10px;
					background: #242423;
				}
				.text{
					padding: 0.5rem;
					font-family: Arial, Helvetica, sans-serif;
				}
				.question {
					color: #ffca3a;
				}
				.answer {
					color: #8ac926;
				}
				code {
					font-size: 1.2rem;
					color: #f72585;
				}
			</style>
			<div class="container">
				<div class="text">
					<p class="question"><b>Q.</b> ${question}</p>
					<p class="answer"><b>A.</b> ${answer} </p>
				</div>
			</div>
		</div>
	</foreignObject>
</svg>`;
  } else {
    renderJoke = `<svg width="500" fill="none" xmlns="http://www.w3.org/2000/svg">
	<foreignObject width="100%" height="100%">
		<div xmlns="http://www.w3.org/1999/xhtml">
			<style>
				.container {
					border: 2px solid #fdfcdc;
					border-radius: 10px;
					background: #242423;
				}
				.text{
					padding: 0.5rem;
					font-family: Arial, Helvetica, sans-serif;
				}
				.quote {
					color: #fdfcdc;
				}
				code {
					font-size: 1.2rem;
					color: #f72585;
				}
			</style>
			<div class="container">
				<div class="text">
					<p class="quote">${jokes[index]}</p>
				</div>
			</div>
		</div>
	</foreignObject>
</svg>`;
  }

  // Sets the type of content sent
  res.setHeader('Content-Type', 'image/svg+xml');
  // Set the Cache type to public (Any cache can store the data) and the max-age
  res.setHeader('Cache-Control', `public, max-age=${cacheSeconds}`);
  res.send(renderJoke);
};
