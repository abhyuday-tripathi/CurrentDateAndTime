# CurrentDateAndTime
This App <a href="https://abhyuday-tripathi.github.io/CurrentDateAndTime/">CurrentDateAndTime</a> Display's `The Current Date & Time.`
It Automatically Detects Your Time Zone And Tells You The Current Date & Time.
<br>
<br>
## **Here is The JS Code**
```javascript
var time = document.getElementById("time");
var date = document.getElementById("date");

function update() {
  // Updating Current Date
  var currentDate = new Date();
  var dd = currentDate.getDate();
  var mm = currentDate.getMonth();
  var yy = currentDate.getFullYear();
  date.innerHTML = dd + "-" + mm + "-" + yy;

  //   Updating Current Time
  var hours = currentDate.getHours();
  var min = currentDate.getMinutes();
  var sec = currentDate.getSeconds();
  time.innerHTML = hours + ":" + min + ":" + sec;
}
```
## **Here is The HTML Code**
```html
  
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>Current Time And Date</title>
  </head>
  <body>
    <h1><span>C</span>urrent <span>T</span>ime and <span>D</span>ate</h1>
    <div class="container1">
      <button onclick="update(); setInterval(function(){update()},1000)">
        Get Date & Time
      </button>
    </div>
    <div class="container2">
      <h1 id="date"></h1>
    </div>
    <div class="container3">
      <h1 id="time"></h1>
    </div>
    <script src="script.js"></script>
  </body>
</html>
```

## **Here is The CSS Code**
```CSS
body {
  font-family: sans-serif;
  font-size: 1em;
  text-align: center;
  background: linear-gradient(130deg, #1d1d1d, #7c6262);
  background-repeat: no-repeat;
  min-height: 100vh;
  overflow: hidden;
}

span {
  color: #ff0157;
  font-weight: 700;
  font-size: 1.5em;
}

button {
  border: 1px solid #ff0157;
  background: none;
  padding: 10px 20px;
  font-size: 20px;
  font-family: sans-serif;
  cursor: pointer;
  margin: 10px;
  color: #ff0157;
  transition: 0.8s;
  position: relative;
  overflow: hidden;
}

button:hover {
  color: #fff;
}

button::before {
  content: "";
  position: absolute;
  left: 0;
  width: 100%;
  height: 0%;
  background: #ff0157;
  z-index: -1;
  transition: 0.8s;
}

button::before {
  top: 0;
  border-radius: 0 0 50% 50%;
}

button:hover::before {
  height: 180%;
}

.container2 {
  margin: 50px;
}

.container1 {
  margin: 100px;
}

h1 {
  color: #fff;
}
```

# Thought of The Day About Coding

As Steve Jobs said:

> Everybody should learn to program a computer, because it teaches you how to think.

# Code Of Cunduct

**Diversey (the “Company”) as a service company insists our focus must always be to attain the very highest people practices which are underpinned by our ethics. Whilst the Company and all of its associates have as their primary goal the fulfillment of our customers’ satisfaction, that must always be achieved with uncompromised integrity. The Company has a reputation for conducting its business on a highly ethical level. It is important for all of us that we continue this record of integrity in the future. All associates are required to read, understand, abide by and comply with our Code of Conduct (the “Code”). We are also obligated to be familiar with and abide by the Company’s policies and procedures. The Code applies to all associates, officers and directors.

 

Compliance with all applicable laws, regulations and Company policies

The Company is subject to federal, national, state, provincial, local, and international laws and regulations. We all must comply with all applicable laws and regulations and uphold our Code. Any Diversey associate aware of unlawful activities in the Company should contact the Legal Department. If a provision of our Code conflicts with applicable law, the law controls.

 

Adherence to Highest Ethical Standards Each of us must adhere to the highest ethical standards of conduct in all of our business activities and must act in a manner that enhances the Company’s reputation in the business community and with the public. Integrity is, and must continue to be, the basis of all our business relationships.

 

Responsibilities

Duty to Speak Up/No Retaliation/Confidentiality

You are required to report promptly, and in good faith, any conduct of any associate or third-party agent (that is, a supplier or business partner) that could constitute a violation of the Code. If you deliberately fail to report a potential violation, or withhold relevant and material information concerning a violation, you may be subject to disciplinary action, up to and including termination of employment. If you have questions regarding the appropriateness of a situation, discuss it with your supervisor, Human Resources or the Legal Department. You also may make a good-faith report of suspected violations or seek guidance by accessing Diversey’s Integrity Line at https://i.diversey.com/resources/code-of-conduct The Company is committed to protecting responsible associates who report suspected violations in good faith. The Company will take steps to protect each associate from reprisals or retaliation so that all are comfortable reporting violations and protecting the Company. If you believe you are the victim of retaliatory action, you should contact your supervisor, Human Resources, the Legal Department or the Integrity Line, as appropriate.

The Company will promptly respond and strive to ensure that your concern is handled with sensitivity, confidentiality and to the fullest extent possible. In return, we expect you to help protect the confidentiality of the report, as well as any subsequent investigation processes, by not discussing the matter with co-workers, members of the public, or media.

 

Appropriate discipline actions when failure to comply with the Code

Any failure to comply with the standards contained in the Code may result in disciplinary action, up to and including termination of employment, and sometimes also personal civil or criminal liability.

All managers, senior leaders, and executives should set an example for their colleagues when performing their duties or otherwise acting on behalf of the Company. Acting transparently and in compliance with this Code, while in a leadership role, makes it clear that the guiding principles and rules described in this Code are to be adhered to without exception.

 

RULES

Our people

Health and Safety—We prioritize safety and health in our workplace.

Wherever we are, safety and well-being of our associates must always come first. We are committed to providing a safe and healthy workplace for all our associates including adequate emergency procedures and fire safety, management of hazardous materials, and housekeeping. As part of this commitment, all facilities must comply with workplace safety laws and ensure proper working conditions. Associates are expected to perform their duties in a safe manner at all times, including operating machinery only according to instructions, and taking appropriate action when a safety hazard arises.

For additional details on associate health and safety, please refer to the Sustainability, Environmental Health and Safety Policy.

 

Do what’s right!

Follow the safety guidelines in place at each of our locations. You are accountable for maintaining an environment free of safety risks or health hazards. When a risk or an unexpected danger emerges, act quickly and safely to get it under control and seek help right away.
Do not come to work under the influence of drugs or alcohol. Remember: any substance that could impair our judgment or physical performance can ultimately harm our co-workers and our customers.
Maintain a safe workplace by resolving differences professionally and respectfully, never through acts or threats of violence, bullying or intimidation.
If any associate observes an unsafe situation it should be addressed immediately and reported to Health and Safety.

 

Discrimination, Harassment and Bullying—We do not tolerate discrimination, harassment or bullying.

Diversey is an Equal Opportunity Employer that values diversity and inclusion in our global organization. Diversey complies with all laws prohibiting discrimination in hiring and employment practices on the basis of race, religion, creed, national origin, gender, sexual orientation, gender identity or expression, age, disability, or other protected status.

We believe diversity in our workforce is an asset that enhances our creativity, innovation, and growth. Our associates’ different cultures, sexual orientations, gender identity, age, backgrounds and experiences allow issues to be seen from varied perspectives, thereby enriching the decision-making process. As representatives of Diversey, associates are prohibited from discriminating against others.

Associates are ensured fundamental human rights that do not conflict with the Diversey business. These rights (e.g. political, social, and cultural) should not be infringed. The Company will not tolerate discrimination on the basis of a person’s race, religion, creed, national origin, gender, sexual orientation, gender identity or expression, age, disability, or other protected status, or, harassment or bullying of its associates by anyone, including any supervisor, co-worker, associate or non-associate, vendor, client, or customer of the Company. Harassment may occur where a person is subjected to unwanted conduct which, when reasonably viewed from the perception of the person being subjected to such conduct and in light of all of the circumstances, has the purpose or effect of violating their dignity or creating an intimidating, hostile, degrading, humiliating, or offensive environment for the person.

All individuals have the right to work in an environment, which is free from discrimination, bullying and harassment. The Company is committed to providing a workplace in which all individuals are given appropriate dignity and respect. Everyone has a responsibility to respect the feelings and sensibilities of others in the workplace, and to behave in a way that does not cause offence. In some instances individuals may be unaware that their behavior is causing offence, but it is the duty of each individual to be sensitive to the impact their conduct may have on coworkers.

Any suspected violations should be reported to the Legal Department. You may also make a good-faith report of suspected violations or seek guidance by accessing the Integrity Line.

 

Do what’s right!

Afford equal employment opportunities to qualified associates and applicants in conformity with all applicable laws and regulations.
Keep interactions with your fellow associates professional and respectful. Do not create an uncomfortable, hostile, or intimidating environment for others through your actions or words.
Respect the diverse characteristics we each bring to the table, even when our cultures or ideas may differ.
 

 

Labor relations

Diversey is committed to treating associates fairly, ensuring human rights and complying with all laws regarding working time, overtime compensation, freedom of association and collective bargaining. Diversey respects workers’ rights to form and join organizations of their choice and to bargain collectively without unlawful interference. Diversey will not discriminate, harass, or penalize workers or worker representatives because of their interest and/or membership in, or affiliation with, a trade union, or their legitimate trade union activity.

Any suspected violations should be reported to the Legal Department. You also may make a good-faith report of suspected violations or seek guidance by accessing the

Integrity Line.

 

Child labor

Diversey shall only employ individuals who meet applicable local minimum age requirements. In addition, we will follow the relevant ILO conventions, which ensure people under 18 are only employed when fully safeguarded from potential exploitation, when protected from health hazards, and when allowed to further their education. Diversey also requires suppliers to conform to best practices. For additional information refer to the Diversey Supplier Code of Conduct.

 

Any suspected violations should be reported to the Legal Department. You also may make a good-faith report of suspected violations or seek guidance by accessing the Integrity Line.

 

Forced Labor, and Human Trafficking

Diversey will not utilize forced labor, human trafficking, or modern day slavery in the manufacturing of its products or in its supply chain. Accordingly, we demand that all business partners demonstrate a clear commitment to protecting these basic human rights of workers worldwide. Coercion, intimidation, or harassment of any Diversey associate is not acceptable.

Any suspected violations should be reported to the Legal Department. You also may make a good-faith report of suspected violations or seek guidance by accessing the Integrity Line.

 

We handle non-public information privately and confidentially.

Diversey’s tools, equipment, facilities and inventories, as well as its know-how, technology, product and formula information, market information and business plans, are all valuable assets. Associates must protect and preserve the Company’s assets and maintain the confidentiality of proprietary, non-public information entrusted to them by the Company, customers and suppliers, except when disclosure is authorized or legally mandated.

Those who use or have access to such information, including co-workers’ personal information, are responsible for keeping it safe and using it only for legitimate and appropriate Company business reasons.

 

 

 

Do what’s right!

Only access, use, store, transfer or modify non-public information as needed to do your job.
Never share non-public information with someone who doesn’t have a business need to know it and isn’t authorized to have it.
Prevent accidental disclosure by keeping your devices password-protected and safely securing any sensitive files in a locked drawer or cabinet.
 

Our Customers

We make and provide high quality and safe products, packaging, machines, equipment and services.

Our primary goal is to provide high quality and safe products and services. We strive to consistently deliver products and services that meet our customers’ expectations and our own high standards, and seek continuous improvement and innovation in our operations to meet those standards. Products must comply with all applicable regulations where they are manufactured, sold, or distributed. Products must be supported by safety information including, but not limited to, appropriate directions for use, hazard classifications, warnings, first aid instructions, and emergency contact information. Accurate and complete Safety Data Sheets and labels must be legible and available to distributors, customers, and end users. Diversey also commits to responsible material use, outlined by the Responsible Chemistry Policy. We are committed to product safety, from concept and manufacture through customer use and disposal, recycle or reuse.

By complying with the laws, regulations and Company policies that govern the development, manufacturing, testing, inspection, storage, transportation, use and disposal of our products, we help ensure the integrity of the Diversey brand. No associate should take any action that could jeopardize our customers’ confidence or trust in the quality and safety of our products and services.

 

We market and communicate responsibly.

The Company’s public communications – like our products – reflect our commitment to integrity and transparency. We market, advertise, and label our products with this in mind, striving for accuracy, transparency and openness with our customers. We never try to mislead our customers with incorrect or incomplete information about our own products or anyone else’s. To maintain accuracy and consistency in all these public communications, only designated Company spokespersons should make public statements about our Company.

 

Do what’s right!

Follow all marketing and advertising laws, ensuring that our claims are substantiated and our methods are both ethical and legal.
Market our products in a truthful, accurate way, never through deception or exaggeration.
When using social media do not discuss any confidential Company information and avoid expressing opinions that could be attributed to the Company; only authorized spokespersons should use social media to make statements on our Company’s behalf.
Refer media requests for information or comments to the Communications team.
 

Our company and shareholders

We maintain the integrity, accuracy and reliability of our books, records and controls.

We are committed to maintaining the Company’s financial books and business records with the highest degree of accuracy, completeness and integrity. We rely on our financial books and business records to make smart, timely business decisions.

All associates generate records as part of their regular tasks, like filling expense reports, drafting contracts and proposals or sending e-mails. It’s crucial that these documents accurately reflect the situation, and that no information is left out.

 

Do what’s right!

Provide the Company’s Directors, associates, consultants, and advisors involved in the preparation of the Company’s required disclosures with information that is accurate, complete, objective, relevant, timely, and understandable.
Record all financial information and business transactions completely, accurately and in a timely manner, and comply with the Company’s disclosure controls and procedures.
Be professional, thoughtful and accurate when creating records, including email or instant messages.
Maintain and destroy records according to our records management policies, applicable legal holds, and record retention schedule.
Do not conceal or destroy records related to an investigation, litigation, or potential claims.
 

We protect and ensure proper use of company’s asset.

All associates are responsible for the proper use of Company assets. The Company has three types of assets:

Physical assets, such as materials, supplies, software, inventory, equipment, computers, internet access and technologies;
Information assets, such as confidential and proprietary business information and intellectual property (including our valuable brands); and
Resource assets, such as capital and company time during the workday. Associates must take all reasonable steps to protect Company assets from theft, destruction, or other loss and to ensure that assets are not wasted, misused, or diverted.
 

 

Do what’s right!

Protect all Company assets in your care from loss, theft, damage, waste, or misuse.
Use Company assets for their intended business purposes. While some personal use may be allowed, such use must always be legal, ethical, and reasonable and should not interfere with your job.
Take precautions to avoid losing, misplacing, or leaving confidential information (or laptops, smartphones, or other items containing this information) unattended.
Avoid discussing confidential information or any other sensitive topics in public areas (think planes, elevators, and restaurants) where others might overhear you.
Don’t use Company technologies to download, view, or send materials that are obscene, offensive, discriminatory, harassing or otherwise unlawful or unethical.
 

 We don’t take actions that conflict or appear to conflict with company’s best interests.

We must avoid any circumstances that create or appear to create an improper personal benefit through the use of Company property, information, or position. Our business decisions must always be based on objective criteria of what’s best for the Company. Even the appearance of a conflict of interest could result in serious consequences, and can undermine the trust that associates, business partners and the public place in the Company. The term “conflict of interest” means any circumstance that could cast doubt upon an associate, officer, or director’s ability to act with complete objectivity regarding the Company’s interests.

Associates should avoid situations in which there is, or appears to be, a conflict between the personal interests of the associate and the interests of the Company.

Associates must disclose any actual or potential conflict as early as possible, so that any conflict of interest may be addressed and resolved in an appropriate manner. Additionally, if you have a question about whether a situation may create a potential conflict of interest, please contact the Legal Department.

Any suspected violations should be reported to the Legal Department. You also may make a good-faith report of suspected violations or seek guidance by accessing the Integrity Line.

 

Do what’s right!

Associates should not engage in any activity that conflicts with the Company’s business, such as working in any capacity for another company that is in the same industry.
If a family member or close friend owns or works for a company seeking to do business with the Company, talk to your manager about your relationship. Similarly, remove yourself from the selection process when your family member interviews for a position at the Company. Do not supervise or be supervised by a family member
Associates should avoid having a financial interest in any company or entity that is (or seeks to be) a business partner, supplier or customer or competitor without first seeking approval.
 

We do not accept gifts as company associates.

Exchanging gifts, entertainment and other forms of hospitality is a common way to build business relationships. However, misuse of gifts and entertainment can lead to actual or apparent conflicts of interest and increase the risk of serious bribery and corruption issues. To prevent these problems and protect our integrity, we maintain appropriate restrictions on the giving and receiving of gifts and entertainment.

We are prohibited from accepting or receiving gifts of value from any business partner. However, reasonable non-cash items that are insignificant, small, incidental, and have a token or nominal value are reasonably permitted, provided that they are not intended and cannot be construed as a bribe, kickback or other form of compensation to the recipient. We are also strictly prohibited from soliciting gifts or services for themselves or others, including family members, or friends.

Consistent with our practice of not accepting gifts, associates are generally prohibited from giving gifts of any value to a business partner. Exceptions must be approved in advance by a responsible manager and the Legal Department. The gift given also should be in compliance with gifts policies established by the receiving party. For your own protection and the Company’s, always register and record any such cases using the appropriate forms or resources; transparency is always the best behavior.

Business entertainment is a situation where representatives from both companies (recipient and provider) attend a meal, performance, or other event and is not considered to be a prohibited gift provided that it complies with the provider’s and recipient’s policies.

Always be careful and remove yourself from instances where the Company’s reputation might be even slightly harmed.

Any suspected violations should be reported to the Legal Department. You also may make a good-faith report of suspected violations or seek guidance by accessing the

Integrity Line.

 

Do what’s right!

Do not offer or participate in business entertainment that is excessive, lavish or extravagant or at a location and conducted in a manner that could harm the Company’s reputation.
Do not receive or give gifts or business entertainment that creates the appearance of conflict of interest or that seeks to influence a decision.
Do not give gifts that are cash or cash equivalents, like gift cards. cash equivalents, like gift cards.
 

 

 

 

Our business partners and communities

We do not tolerate bribery and corruption.

We have a zero tolerance anti-corruption policy and associates must never offer, give or accept bribes to get business done. We are strictly prohibited from directly or indirectly giving, offering, promising, or authorizing anything of value – no matter how small – to any government official or agency (including a national or local government official or associate, a political candidate, or an official or associate of a government-owned or controlled entity) or any other individual to secure a business advantage, influence business or governmental decision making in connection with any of our activities, or otherwise induce the recipient to abuse his or her power or official position.

This prohibition must be interpreted broadly and applies to anyone acting on our behalf, including suppliers, distributors, contractors, consultants and agents.

We strictly abide by the Foreign Corrupt Practices Act (FCPA), the UK Bribery Act and all similar statutes applicable in each jurisdiction.

In many countries, facilitating payments offered in exchange for expedited services are legal. Nonetheless, such payments often appear unethical and we do not permit them. We are a global company and our reputation matters.

Associates must obtain preapproval from General Counsel before providing the government official with any gift or any item of value or provision of any entertainment or hospitality.

Any suspected violations should be reported to the Legal Department. You also may make a good-faith report of suspected violations or seek guidance by accessing the Integrity Line.

 

Do what’s right!

Never offer, promise, or provide anything of value (no matter how small) to a government official or other third party in order to gain a business advantage.
Do not instruct, authorize, or allow a third party to make a prohibited payment on your or the Company’s behalf.
Do not make a payment to a third party knowing or having reason to believe that it is likely to be used to improperly provide something of value to a government official or other individual.
Always record any payments made or receipts obtained accurately, completely, and in a timely manner.
 

We comply with competition and antitrust laws.

Antitrust laws (also referred to as “competition laws”) govern competitive conduct, and apply to the Company’s relationships with other manufacturers, competitors, suppliers, brokers, and customers. The laws are often very broad and complex, and vary from country to country, but they share the same goal: to encourage free and fair competition. Every associate is required to always comply with relevant antitrust/competition laws both at national and international levels, across all jurisdictions in which we conduct business. Every Company action we perform has to comply with the rules of fair competition. No Company action should prevent, restrict, or distort competition.

Penalties for violating antitrust laws are severe, and include significant fines and other monetary liability. In addition, associates who authorize or participate in violations can face imprisonment in many nations. Ignorance of what constitutes a violation of these laws is no defense.

Every Company action we perform has to comply with the rules of fair competition. No Company action should prevent, restrict, or distort competition. By competing with integrity throughout the world, we can avoid running afoul of competition laws while protecting one of our most valuable assets: our reputation.

Because circumstantial evidence is frequently the basis upon which antitrust liability is found, avoid even the appearance of anti-competitive conduct.

Any suspected violations should be reported to the Legal Department. You also may make a good-faith report of suspected violations or seek guidance by accessing the Integrity Line.

 

Do what’s right!

Follow all applicable antitrust and competition laws.
Consult the Legal Department immediately whenever you have an antitrust or competition law question, or if you feel you may have been part of an anticompetitive conversation or interaction.
Do not enter into any agreement or understanding with any competitor regarding price.
Do not discuss with any competitor our Company’s or such competitor’s past, present, or future prices, markets promotional programs or sale terms.
 

We are a socially and environmentally responsible company: We actively engage in growing a better world.

We are dedicated to enhancing the quality of people’s lives through our commitment to sustainability, health and wellness, and social responsibility. Diversey commits to operate in a sustainable manner by evaluating and improving our social and environmental impacts. Diversey will integrate sustainability targets into company objectives, embrace best practices, and communicate our results to stakeholders.

We comply with all applicable environmental laws and regulations. We are vigilant in preventing accidents, spills, and any other potential threats to the health and safety of our communities and our planet.

 

Do what’s right!

Make sustainability a personal goal: conserve electricity, recycle resources, and be conscious of your individual impact on the environment.
Report any environmental health and safety hazards right away; spills, leaks, and other potentially dangerous situations can’t wait.
Ensure suppliers and other business partners are committed to following environmental regulations and human rights laws.
Actively participate in our programs and initiatives to improve the world and communities.
Do not engage in the use of forced or child labor, nor do we condone the mistreatment of any individuals who conduct business with or on behalf of the Company.
 **
 
 `Please Follow Me On GITHUB`
