import React, { useState } from "react";
import { Link } from "react-router-dom";
import formula1 from "../assets/formula1.svg";
import formula2 from "../assets/formula2.svg";
import formula3 from "../assets/formula3.svg";
import formula4 from "../assets/formula4.svg";
import formula5 from "../assets/formula5.svg";
import formula6 from "../assets/formula6.svg";
import formula7 from "../assets/formula7.svg";
import formula8 from "../assets/formula8.svg";
import formula9 from "../assets/formula9.svg";

import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { FaRegQuestionCircle } from "react-icons/fa";

import { GrNotes } from "react-icons/gr";
import { RxDrawingPinFilled } from "react-icons/rx";

import { Footer } from "./Footer";
import ScrollToTop from "./ScrollToTop";
import Quiz3 from "../quiz/Quiz3";
import CodeSnippetWithCopy from "./CodeSnippetWithCopy";
import ZoomImage from "./ZoomImage";

export const Userbased = () => {
  const [showQuiz, setShowQuiz] = useState(false);

  const handleStartQuiz = () => {
    setShowQuiz(true);
  };

  const handleCloseQuiz = () => {
    setShowQuiz(false);
  };

  var code12 = String.raw`
import pandas as pd
import numpy as np
from sklearn.metrics import mean_squared_error
            `;

  var code13 = String.raw`
train_df = pd.read_csv("ml-100k/u1.base", sep="\t", header=None,
names=["user_id", "item_id", "rating", "timestamp"])
test_df = pd.read_csv("ml-100k/u1.test", sep="\t", header=None,
names=["user_id", "item_id", "rating", "timestamp"])
            `;
  var code14 = String.raw`
train_df.head()
            `;
  var code15 = String.raw`
ratings_matrix = pd.pivot_table(train_df, values='rating', index='user_id', columns='item_id')
            `;
  var code16 = String.raw`
normalized_ratings_matrix = ratings_matrix.subtract(ratings_matrix.mean(axis=1), axis=0)
            `;
  var code17 = String.raw`
similarity_matrix = ratings_matrix.T.corr()
            `;
  var code18 = String.raw`
def calculate_score(u, i):
    # Check whether the item is in the training dataset
    if i not in ratings_matrix.columns:
        return 2.5

similarity_scores = similarity_matrix[u].drop(labels=u)
    normalized_ratings = normalized_ratings_matrix[i].drop(index=u)

# Drop users that haven't rated the item

similarity_scores.drop(index=normalized_ratings[normalized_ratings.isnull()].index, inplace=True)
    normalized_ratings.dropna(inplace=True)
           
    # If none of the other users have rated items in common with the user in question return the baseline value
    if similarity_scores.isna().all():
        return 2.5
           
    total_score = 0
    total_weight = 0
    for v in normalized_ratings.index:        
        # It's possible that another user rated the item but that
        # they have not rated any items in common with the user in question
        if not pd.isna(similarity_scores[v]):
            total_score += normalized_ratings[v] * similarity_scores[v]
            total_weight += abs(similarity_scores[v])
                   
    avg_user_rating = ratings_matrix.T.mean()[u]
           
    return avg_user_rating + total_score / total_weight
      `;
  var code19 = String.raw`
test_ratings = np.array(test_df["rating"])
user_item_pairs = zip(test_df["user_id"], test_df["item_id"])
pred_ratings = np.array([calculate_score(user_id, item_id) for (user_id, item_id) in user_item_pairs])
print(np.sqrt(mean_squared_error(test_ratings, pred_ratings)))

0.9725765287253909
            `;
  var code20 = String.raw`
baseline_rating = train_df["rating"].mean()
baseline_ratings = np.array([baseline_rating for _ in range(test_df.shape[0])])
print(np.sqrt(mean_squared_error(test_ratings, baseline_ratings)))

1.1536759477860323
            `;

  return (
    <div className="aybala dark:text-white">
      <ScrollToTop />
      <main className="lg:ml-[380px] pt-10 mx-7 md:mx-14">
        <p className="lg:mt-10 text-3xl font-bold lg:text-4xl text-[#23272F] dark:text-[#F6F7F9]">
          User-based Collaborative Filtering
        </p>

        <div className="contFont bg-[#F6F7F9] dark:bg-[#343A46] dark:text-white rounded-xl border-2 dark:border-0 my-5 p-7">
          <p className="text-xl font-bold mb-3">What you will learn</p>
          <ul className="list-disc ml-7 leading-7 font-light">
            <li>
              <a className="hover:pl-2" href="#what-is-recommender-system">
                What is recommender system
              </a>
            </li>
            <li>
              <a className="hover:pl-2" href="#neighbourhoods">
                Neighbourhoods
              </a>
            </li>
            <li>
              <a className="hover:pl-2" href="#python-codes">
                Python codes
              </a>
            </li>
            <li>
              <a className="hover:pl-2" href="#in-summary">
                In summary
              </a>
            </li>
          </ul>
        </div>
        <br />
        <h1
          id="what-is-recommender-system"
          className="lg:mt-6 mt-6 lg:max-w-4xl lg:text-lg leading-7"
        >
          Recommendations based on similar user preferences are generated using
          user-based collaborative filtering. For instance, suppose another user
          rates films similarly to the one in question. It is reasonable to
          presume that their interests are similar. Therefore, we would suggest
          a movie that the user hasn't seen if the other user has seen and
          enjoyed it.
          <br />
          <br />
          We might use social proof when making a purchase decision. In other
          words, we would inquire with those we know to see if they would
          suggest it. While some would answer "no," others would respond "yes."
          If the average rating was higher than zero, we would proceed with the
          transaction.
          <br />
          <br />
          The following formula would be used to mathematically express it:
          <br />
          <br />
          <ZoomImage src={formula1} alt="formula1" />
          <br />
          To put it simply, the rating for item i for user u is calculated by
          dividing the total number of users in the dataset by the sum of the
          ratings for that item.
          <br />
          <br />
          The degree of similarity between two users is not taken into account
          in the equation above. Assume, for example, that users u and v_{
            1
          }{" "}
          have similar tastes, but u and v_{2} have extremely different tastes.
          It does not follow that user u will enjoy a movie just because user v_
          {2} gave it a very high rating of five stars. Conversely, in the event
          that v_{1} assigns a high rating to a film, it is probable that user u
          will follow suit.
          <br />
          <br />
          We multiply each rating by a weight that indicates how much the tastes
          of user u and user v are similar in order to account for similarity.
          <br />
          <br />
          <span className="flex justify-center">
            <ZoomImage src={formula2} alt="formula2" />
          </span>
        </h1>

        <div className="flex flex-col p-7 rounded-xl bg-[#ccf8ec] dark:bg-[#26353A] lg:mt-6 mt-6 lg:max-w-4xl text-sm lg:text-base leading-7">
          <p className="mb-5 font-bold flex">
            <GrNotes className="text-2xl mr-4" />
            <span className="lg:text-xl text-lg">Note</span>
          </p>
          <p>
            We divide the dataset by the sum of the absolute values of the
            weights, not by the total number of users.
          </p>
        </div>

        <p className="lg:mt-6 mt-6 lg:max-w-4xl lg:text-lg leading-7">
          The degree to which user preferences are similar can be determined in
          a number of ways. You may calculate the cosine similarity using the
          formula below:
          <br />
          <br />
          <span className="flex justify-center">
            <ZoomImage src={formula3} alt="formula3" />
          </span>
          <br />
          People sometimes rate on multiple scales, which is still not taken
          into account by the existing equation. An optimistic individual, for
          instance, would give a movie three stars even though they didn't
          particularly enjoy it, yet a more cynical person with comparable
          interests would only give the film one star.
          <br />
          <br />
          This is the reason the ratings need to be normalised. In order to
          accomplish this, we deduct the item's rating (i) from the average
          rating that user (v) assigned to all things. To get the outcome back
          to a 5-star rating, we have to add the average rating that user u gave
          to every item.
          <br />
          <br />
          <span className="flex justify-center">
            <ZoomImage src={formula4} alt="formula4" />
          </span>
          <br />
          <br />
        </p>
        <h1
          id="neighbourhoods"
          className="group lg:mt-10 text-2xl font-bold lg:text-3xl text-[#23272F] dark:text-[#F6F7F9] flex items-center"
        >
          <a className="flex items-center" href="#neighbourhoods">
            Neighbourhoods
            <RxDrawingPinFilled className="ml-2 text-2xl lg:text-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </h1>
        <p className="lg:mt-6 mt-6 lg:max-w-4xl lg:text-lg leading-7">
          When calculating pairwise correlations, the large O notation is O(m²n)
          given m=|U| users and n=|I| items. When the dataset is enormous, this
          becomes problematic. That's the reason we present the concept of a
          neighborhood. A neighborhood is a portion of the user base from the
          information that was utilised for predicting the rating.
          <br />
          <br />
          The following methods can be used to select what users should be
          contained within a neighbourhood:
          <br />
          <br />
        </p>
        <p className="ml-10 lg:text-lg">
          1. Select users with a similarity score above a certain threshold
          <br />
          <br />
          2. Select at random
          <br />
          <br />
          3. Select the top-N users ranked by similarity score
          <br />
          <br />
          4. Select users within the same cluster
          <br />
          <br />
        </p>
        <p className="lg:mt-6 mt-6 lg:max-w-4xl lg:text-lg leading-7">
          Theoretically, more data is preferable. In actuality, noise from
          neighbours with different backgrounds can reduce the forecast
          accuracy. In the industrial sector, a user base of between 25 to 100
          is common.
          <br />
          <br />
          Assume that the neighbourhood V is made up of people who are
          comparable to the user whose rating we are attempting to estimate. The
          rating is computed using the following formula:
          <br />
          <br />
          <span className="flex justify-center">
            <ZoomImage src={formula5} alt="formula5" />
          </span>
          <br />
          <br />
        </p>
        <h1
          id="python-codes"
          className="group lg:mt-10 text-2xl font-bold lg:text-3xl text-[#23272F] dark:text-[#F6F7F9] flex items-center"
        >
          <a className="flex items-center" href="#python-codes">
            Python codes
            <RxDrawingPinFilled className="ml-2 text-2xl lg:text-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </h1>
        <p className="lg:mt-6 mt-6 lg:max-w-4xl lg:text-lg leading-7">
          We begin by importing the following libraries:
        </p>

        <CodeSnippetWithCopy code={code12} />
        <p className="lg:mt-6 mt-6 lg:max-w-4xl lg:text-lg leading-7">
          After downloading the{" "}
          <Link
            className="underline font-bold"
            to="https://grouplens.org/datasets/movielens/100k/"
            target="_blank"
          >
            MovieLens dataset
          </Link>
          , we load the test and training sets into memory.
        </p>
        <CodeSnippetWithCopy code={code13} />

        <p className="lg:mt-6 mt-6 lg:max-w-4xl lg:text-lg leading-7">
          Our DataFrame has user ratings for each item in each row.
        </p>

        <CodeSnippetWithCopy code={code14} />
        <br />
        <br />
        <p className="lg:mt-6 mt-6 lg:max-w-4xl lg:text-lg leading-7">
          <span className="flex justify-center">
            <ZoomImage src={formula6} alt="formula6" />
          </span>
          <br />
          <br />
          We construct the matrix of ratings.
        </p>

        <CodeSnippetWithCopy code={code15} />
        <br />
        <br />
        <br />

        <ZoomImage src={formula7} alt="formula7" />
        <br />
        <p className="lg:mt-6 mt-6 lg:max-w-4xl lg:text-lg leading-7">
          We take the mean rating of each user and subtract it from each user's
          rating to normalise the ratings matrix.
        </p>
        <br />
        <CodeSnippetWithCopy code={code16} />
        <br />
        <br />
        <p className="lg:mt-6 mt-6 lg:max-w-4xl lg:text-lg leading-7">
          <ZoomImage src={formula8} alt="formula8" />
          <br />
          <br />
          We are utilising the Pearson correlation in this instance. But we
          would have to impute the missing data if we were going to use the
          cosine similarity. The most popular method is to use the average
          rating for the item across all users or the average rating for the
          user across all items to fill in the missing value. Others may
          substitute 0 for the missing numbers. As long as we first normalise
          the data, this is acceptable.
        </p>
        <br />
        <CodeSnippetWithCopy code={code17} />
        <br />
        <p className="lg:mt-6 mt-6 lg:max-w-4xl lg:text-lg leading-7">
          <ZoomImage src={formula9} alt="formula9" />
        </p>
        <br />
        <p className="lg:mt-6 mt-6 lg:max-w-4xl lg:text-lg leading-7">
          We create a function that uses the formula from the previous section
          to determine the score, or rating. It is important to remember that
          not every item in the training set is present in the test set. As it's
          neutral in this instance, we'll go with 2.5 (you could also take the
          dataset's average rating).
        </p>
        <br />

        <CodeSnippetWithCopy code={code18} />
        <br />
        <p className="lg:mt-6 mt-6 lg:max-w-4xl lg:text-lg leading-7">
          Using the previously established function, we go through each
          user/item pair in the test set and determine the prediction.
        </p>
        <br />
        <CodeSnippetWithCopy code={code19} />
        <br />
        <p className="lg:mt-6 mt-6 lg:max-w-4xl lg:text-lg leading-7">
          Clearly, our recommendation algorithm outperformed the baseline.
        </p>
        <br />
        <CodeSnippetWithCopy code={code20} />
        <br />
        <br />
        <h1
          id="in-summary"
          className="group lg:mt-10 text-2xl font-bold lg:text-3xl text-[#23272F] dark:text-[#F6F7F9] flex items-center"
        >
          <a className="flex items-center" href="#in-summary">
            In summary
            <RxDrawingPinFilled className="ml-2 text-2xl lg:text-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </h1>

        <p className="lg:mt-6 mt-6 lg:max-w-4xl lg:text-lg leading-7">
          User-based collaborative filtering is an effective way to come up for
          recommendations. Nevertheless, it has problems with sparsity. Put
          another way, there is a lot of memory space lost because you typically
          encounter a huge number of things and a relatively small number of
          ratings. Not to mention that computing all pairwise correlations gets
          incredibly expensive when we start working with millions of
          individuals. In order to avoid this problem, we compute the rating by
          taking a neighborhood sample of users.
        </p>
        <br />
        <br />
        {/* QUIZ SECTION */}
        <div className="flex flex-col p-7 rounded-xl bg-[#e0e2f8] dark:bg-[#26353A] lg:mt-6 mt-6 lg:max-w-4xl text-sm lg:text-base leading-7">
          <p className="mb-5 font-bold text-xl flex justify-center">
            <FaRegQuestionCircle className="text-2xl mr-4" />
            <span className="lg:text-xl text-lg">
              Let's Check Your Knowledge!
            </span>
          </p>
          <div className="flex justify-center">
            <button
              className="bg-[#1F4F8D] text-white px-4 py-2 rounded transition ease-in-out  hover:-translate-y-1 hover:scale-110 hover:bg-[#EF720A] duration-100"
              onClick={handleStartQuiz}
            >
              Start Quiz
            </button>
            {showQuiz && <Quiz3 onClose={handleCloseQuiz} />}
          </div>
        </div>

        {/* Navigation */}

        <div className="lg:flex lg:justify-between my-24 lg:mx-22 lg:text-lg text-sm">
          <div className="hover:bg-[#E2E2E2] dark:hover:bg-[#343A46] p-5 rounded-xl lg:text-left">
            <Link to={"/learn/collaborative-filtering"}>
              <p className="pl-10">PREVIOUS</p>
              <span className="flex justify-start">
                <IoIosArrowBack />
              </span>
              <p className="text-[#0A7EA3] dark:text-[#58C4DC] pl-10">
                Collaborative Filtering
              </p>
            </Link>
          </div>

          <div className="hover:bg-[#E2E2E2] dark:hover:bg-[#343A46] p-5 rounded-xl lg:mr-20 text-right">
            <Link to={"/learn/item-based-filtering"}>
              <p className="pr-10">NEXT</p>
              <span className="flex justify-end">
                <IoIosArrowForward />
              </span>
              <p className="text-[#0A7EA3] dark:text-[#58C4DC] pr-10">
                Item-based Filtering
              </p>
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
};
