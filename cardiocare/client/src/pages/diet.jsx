import React from 'react';
import '../pages/style.css'; // Import your CSS file
import diary from '../assets/img/diary.jpg';
import salt from '../assets/img/sodium.jpg';
import fruit from '../assets/img/fruitveg.jpg';
import oils from '../assets/img/healthyoils.jpg';
import grain from '../assets/img/wholegrain.jpg';
import protien from '../assets/img/protiens.jpg';

const DietCard = () => {
  return (
    <>
      <div>
        <br />
        <h1 style={{ textAlign: 'center',marginTop: '20px',fontSize:'40px' }}><b>Diet</b></h1>
        <p style={{ textAlign: 'center' }}>Mainly focuses on reducing risk factors such as high blood pressure, high cholesterol levels, and excess body weight</p>
      </div>

      <div className="container">
        <div className="card__container">
          <article className="card__article">
            <img src={fruit} alt="image" className="card__img" />
            <div className="card__data">
              <h2 className="card__title">Vegetables and Fruits</h2>
              <span className="card__description">
                <ul>
                  <li>Fresh vegetables like tomatoes, cabbage, and carrots</li>
                  <li>Leafy greens like lettuce, spinach, and kale</li>
                  <li>Fresh fruits like apples, oranges, mangoes</li>
                </ul>
              </span>
            </div>
          </article>

          <article className="card__article">
            <img src={diary} alt="image" className="card__img" />
            <div className="card__data">
              <h2 className="card__title">Dairy</h2>
              <span className="card__description">
                Look for fat-free or low-fat options like:
                <ul>
                  <li>Fat-free or low-fat (1%) milk</li>
                  <li>Fat-free or low-fat plain yogurt</li>
                  <li>Fat-free or low-fat cheese or cottage cheese</li>
                </ul>
              </span>
            </div>
          </article>

          <article className="card__article">
            <img src={grain} alt="image" className="card__img" />
            <div className="card__data">
              <h2 className="card__title">Whole Grains</h2>
              <span className="card__description">
                Look for products that say 100% whole grain.
                <ul>
                  <li>Whole-grain bread, bagels, English muffins, and tortillas</li>
                  <li>Whole grains like brown or wild rice, quinoa, or oats</li>
                  <li>Whole-wheat or whole-grain pasta and couscous</li>
                </ul>
              </span>
            </div>
          </article>

          <article className="card__article">
            <img src={protien} alt="image" className="card__img" />
            <div className="card__data">
              <h2 className="card__title">Proteins</h2>
              <span className="card__description">
                <ul>
                  <li>Seafood — fish and shellfish</li>
                  <li>Poultry — chicken or turkey breast or lean ground chicken</li>
                  <li>Beans, peas, and lentils — like black beans </li>
                  <li>Eggs, Tofu</li>
                  <li>Unsalted nuts, seeds like almond or peanut butter</li>
                </ul>
              </span>
            </div>
          </article>

          <article className="card__article">
            <img src={oils} alt="image" className="card__img" />
            <div className="card__data">
              <h2 className="card__title">Healthy Fats and Oils</h2>
              <span className="card__description">
                Replace saturated fat with foods that have healthier unsaturated fats
                <ul>
                  <li>Seafood, nuts, seeds, avocados, and oils.</li>
                  <li>Vegetable oil (canola, olive, or sunflower) for cooking</li>
                  <li>Oil-based salad dressings like balsamic vinaigrette or Italian </li>
                </ul>
              </span>
            </div>
          </article>

          <article className="card__article">
            <img src={salt} alt="image" className="card__img" />
            <div className="card__data">
              <h2 className="card__title">Cut down on Sodium</h2>
              <span className="card__description">
                Reduce intake of salt
                <ul>
                  <li>Read the Nutrition Facts label and choose foods that are lower in sodium.</li>
                  <li>Look for foods labeled “low sodium” or “no salt added” — like some packaged meals, and snack foods.</li>
                </ul>
              </span>
            </div>
          </article>

        </div>
      </div>

      {/* <footer>
        <p style={{ textAlign: 'center' }}>Every healthy choice you make is a step towards a stronger heart and a brighter future.</p>
      </footer> */}
    </>
  );
}

export default DietCard;