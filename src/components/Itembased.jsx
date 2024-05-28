import React, { useState } from "react";
import { Link } from "react-router-dom";
import itembased from "../assets/itembased.svg";
import figure1 from "../assets/figure1.svg";
import figure2 from "../assets/figure2.svg";
import figure3 from "../assets/figure3.svg";
import figure4 from "../assets/figure4.svg";
import figure5 from "../assets/figure5.svg";
import figure6 from "../assets/figure6.svg";

import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { FaRegQuestionCircle } from "react-icons/fa";

import { RxDrawingPinFilled } from "react-icons/rx";

import { Footer } from "./Footer";
import ScrollToTop from "./ScrollToTop";
import Quiz4 from "../quiz/Quiz4";
import CodeSnippetWithCopy from "./CodeSnippetWithCopy";
import ZoomImage from "./ZoomImage";

export const Itembased = () => {
  const [showQuiz, setShowQuiz] = useState(false);

  const handleStartQuiz = () => {
    setShowQuiz(true);
  };

  const handleCloseQuiz = () => {
    setShowQuiz(false);
  };

  var code21 = String.raw`
import pandas as pd
import numpy as np
from copy import deepcopy
from scipy.spatial.distance import pdist, squareform
import matplotlib.pyplot as plt

train_path = '../data/ml-100k/u1.base'
test_path = '../data/ml-100k/u1.test'

df = pd.read_csv(train_path, delimiter = '\t', names = ['userid', 'itemid', 'rating', 'timestamp'])
utility = df.pivot(index = 'itemid', columns = 'userid', values = 'rating')
utility = utility.fillna(0)
utility.head()
        `;

  var code22 = String.raw`
# similarity = 1- distance
distance_mtx = squareform(pdist(utility, 'cosine'))
similarity_mtx = 1- distance_mtx

plt.imshow(similarity_mtx, cmap = 'Blues')
        `;

  var code23 = String.raw`
# Let's predict the rating of user2 on item 3
user_to_predict = 2
item_to_predict = 3

user2_ratings = utility.iloc[:,user_to_predict-1]
item3_similarity = similarity_mtx[item_to_predict-1]

numerator = np.dot(user2_ratings,item3_similarity)
denom = item3_similarity[user2_ratings > 0].sum()
prediction = numerator / denom
print(prediction)
        `;
  var code24 = String.raw`
test = pd.read_csv(test_path, delimiter = '\t', names = ['userid', 'itemid', 'rating', 'timestamp'])
test_set = test[['userid', 'itemid']].to_numpy()
test_real = test['rating'].to_numpy()

pred = []
for data in test_set:
    res = compute_prediction(data[0], data[1], similarity_mtx, utility)
    pred.append(res)
    
rmse = np.sqrt(np.mean((test_real - pred)**2))
print(f'RMSE = {rmse}')
        `;
  var code25 = String.raw`
def calculate_user_rating(userid, similarity_mtx, utility):
  user_rating = utility.iloc[:,userid-1]
  pred_rating = deepcopy(user_rating)
    
  default_rating = user_rating[user_rating>0].mean()
  numerate = np.dot(similarity_mtx, user_rating)
  corr_sim = similarity_mtx[:, user_rating >0]
  for i,ix in enumerate(pred_rating):
      temp = 0
      if ix < 1:
          w_r = numerate[i]
          sum_w = corr_sim[i,:].sum()
          if w_r == 0 or sum_w == 0:
              temp = default_rating
          else:
              temp = w_r / sum_w
          pred_rating.iloc[i] = temp
  return pred_rating


def recommendation_to_user(userid, top_n, similarity_mtx, utility):
    user_rating = utility.iloc[:,userid-1]
    pred_rating = calculate_user_rating(userid, similarity_mtx, utility)

    top_item = sorted(range(1,len(pred_rating)), key = lambda i: -1*pred_rating.iloc[i])
    top_item = list(filter(lambda x: user_rating.iloc[x]==0, top_item))[:top_n]
    res = []
    for i in top_item:
        res.append(tuple([i, pred_rating.iloc[i]]))
    
    return res

recommendation_to_user(2,10,similarity_mtx, utility)
        `;

  return (
    <div className="aybala dark:text-white">
      <ScrollToTop />
      <main className="lg:ml-[380px] pt-10 mx-7 md:mx-14">
        <p className="lg:mt-10 text-3xl font-bold lg:text-4xl text-[#23272F] dark:text-[#F6F7F9]">
          Item-based Collaborative Filtering
        </p>

        <div className="contFont bg-[#F6F7F9] dark:bg-[#343A46] dark:text-white rounded-xl border-2 dark:border-0 my-5 p-7">
          <p className="text-xl font-bold mb-3">What you will learn</p>
          <ul className="list-disc ml-7 leading-7 font-light">
            <li>
              <a
                className="hover:pl-2"
                href="#item-based-collaborative-filtering"
              >
                Item-based collaborative filtering
              </a>
            </li>
            <li>
              <a className="hover:pl-2" href="#python-codes">
                Python codes
              </a>
            </li>
            <li>
              <a
                className="hover:pl-2"
                href="#building-the-recommendation-system"
              >
                Building the Recommendation System
              </a>
            </li>
            <li>
              <a className="hover:pl-2" href="#default-voting">
                Default Voting
              </a>
            </li>
            <li>
              <a className="hover:pl-2" href="#case-amplification">
                Case Amplification
              </a>
            </li>
            <li>
              <a className="hover:pl-2" href="#imputation-boosted-cf">
                Imputation Boosted CF
              </a>
            </li>
            <li>
              <a className="hover:pl-2" href="#hybrid-model">
                Hybrid Model
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
          id="item-based-collaborative-filtering"
          className="lg:mt-6 mt-6 lg:max-w-4xl lg:text-lg leading-7"
        >
          Item-based collaborative filtering utilizes the ratings of items that
          have been co-rated to estimate the rating a user would give to a
          specific item.
          <br />
          <br />
          <span className="flex justify-center">
            <ZoomImage src={itembased} alt="itembased" />
          </span>
          <br />
          For instance, we wish to forecast user 2's rating for item 2.
          <br />
          <br />
          <br />
          <span className="flex justify-center">
            <ZoomImage src={figure1} alt="figure1" />
          </span>
          <br />
          <br />
          To predict the rating,
          <br />
          <br />
          <span className="leading-9">
            1. Find the co-rated items of user 2, which is item 1 and item 4
            <br />
            2. Calculate the similarity between item 2 and item 1, 4<br />
            3. Calculate the prediction based on the similarity and co-rated
            rating, such that
          </span>
          <br />
          <br />
          <br />
          <span className="flex justify-center">
            <ZoomImage src={figure2} alt="figure2" />
          </span>
          <br />
          <br />
          where r is the rating value and w is the similarity.
          <br />
          <br />
          <span className="flex justify-center">
            <ZoomImage src={figure3} alt="figure3" />
          </span>
        </h1>
        <br />
        <br />
        <h1
          id="python-codes"
          className="group lg:mt-10 text-2xl font-bold lg:text-3xl text-[#23272F] dark:text-[#F6F7F9] flex items-center"
        >
          <a className="flex items-center" href="#python-codes">
            Python codes
            <RxDrawingPinFilled className="ml-2 text-2xl lg:text-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </h1>
        <br />
        <CodeSnippetWithCopy code={code21} />
        <br />
        <br />

        <p className="lg:mt-6 mt-6 lg:max-w-4xl lg:text-lg leading-7">
          <span className="flex justify-center">
            <ZoomImage src={figure4} alt="figure4" />
          </span>
          <br />
          <br />
          Next, we calculate the <b>similarity</b>. There are a lot of methods
          to calculate the similarity between the items, such as{" "}
          <b>Jaccard similarity</b>, <b>Pearson correlation</b>, etc.
          <br />
          <br />
          We'll use the cosine similarity in this example.
        </p>
        <CodeSnippetWithCopy code={code22} />

        <p className="lg:mt-6 mt-6 lg:max-w-4xl lg:text-lg leading-7">
          <span className="flex justify-center">
            <ZoomImage src={figure5} alt="figure5" />
          </span>
          <br />
          The heatmap illustrates how the sparsity of the data contributes to
          the low data similarity.
          <br />
          <br />
          We are now going to forecast user 2's rating for item 3.
        </p>
        <br />
        <CodeSnippetWithCopy code={code23} />

        <p className="p-7 rounded-xl bg-[#edecec] dark:bg-[#374151] lg:mt-6 mt-6 lg:max-w-4xl text-sm lg:text-base leading-7 font-mono">
          3.822284928259705
        </p>
        <br />
        <p className="lg:mt-6 mt-6 lg:max-w-4xl lg:text-lg leading-7">
          We can use the <b>RMSE</b> to test our model.
        </p>
        <br />
        <CodeSnippetWithCopy code={code24} />

        <p className="p-7 rounded-xl bg-[#edecec] dark:bg-[#374151] lg:mt-6 mt-6 lg:max-w-4xl text-sm lg:text-base leading-7 font-mono">
          RMSE = 1.0452369678411928
        </p>
        <br />
        <br />
        <br />

        <h1
          id="building-the-recommendation-system"
          className="group lg:mt-10 text-2xl font-bold lg:text-3xl text-[#23272F] dark:text-[#F6F7F9] flex items-center"
        >
          <a
            className="flex items-center"
            href="#building-the-recommendation-system"
          >
            Building the Recommendation System
            <RxDrawingPinFilled className="ml-2 text-2xl lg:text-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </h1>

        <p className="lg:mt-6 mt-6 lg:max-w-4xl lg:text-lg leading-7">
          In order to transform the item-based model into a recommendation
          system, we calculate all ratings of the specific user. For instance,
          we wish to propose goods to user 2, and we calculate all expected
          ratings and select the top n items that user 2 could like.
        </p>
        <br />
        <CodeSnippetWithCopy code={code25} />
        <br />
        <p className="lg:mt-6 mt-6 lg:max-w-4xl lg:text-lg leading-7">
          As a result, we will recommend the next ten things to user 2 and then
          predict his rating.
        </p>

        <p className="p-7 rounded-xl bg-[#edecec] dark:bg-[#374151] lg:mt-6 mt-6 lg:max-w-4xl text-sm lg:text-base leading-7 font-mono">
          [(1398, 4.704560704514258),
          <br />
          (861, 4.642353328817946),
          <br />
          (1641, 4.641362312762584),
          <br />
          (1439, 4.603460311402641),
          <br />
          (1123, 4.543079741085078),
          <br />
          (1346, 4.4948279147275025),
          <br />
          (1560, 4.4948279147275025),
          <br />
          (1333, 4.45874227212434),
          <br />
          (774, 4.389151878334362),
          <br />
          (1530, 4.379045803272321)]
        </p>
        <br />

        <p className="lg:mt-6 mt-6 lg:max-w-4xl lg:text-lg leading-7">
          Given that the rating score ranges from 1 to 5, the RMSE indicates
          that 1.045 is a rather high value in our situation. Our item-based
          approach will not be sufficient to give an effective model in
          practice. Our item-based approach can be improved in a number of ways.
        </p>
        <br />
        <br />
        <h1
          id="default-voting"
          className="group lg:mt-10 text-2xl font-bold lg:text-3xl text-[#23272F] dark:text-[#F6F7F9] flex items-center"
        >
          <a className="flex items-center" href="#default-voting">
            Default Voting
            <RxDrawingPinFilled className="ml-2 text-2xl lg:text-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </h1>

        <p className="lg:mt-6 mt-6 lg:max-w-4xl lg:text-lg leading-7">
          We can examine user behavior to adjust the vote weight by focusing on
          the co-rated items instead of the overall list. For instance,
          <br />
          <br />
          <span className="leading-9">
            1. Reducing the weight of users that have fewer than 50 rate history
            <br />
            2. Extend the user's voting history by default voting using the
            average of a small set of co-rated things.
          </span>
        </p>
        <br />
        <br />
        <h1
          id="case-amplification"
          className="group lg:mt-10 text-2xl font-bold lg:text-3xl text-[#23272F] dark:text-[#F6F7F9] flex items-center"
        >
          <a className="flex items-center" href="#case-amplification">
            Case Amplification
            <RxDrawingPinFilled className="ml-2 text-2xl lg:text-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </h1>

        <p className="lg:mt-6 mt-6 lg:max-w-4xl lg:text-lg leading-7">
          Increasing the significance of every vote. We reward high similarity
          ratings and reduce low ones so that
          <br />
          <br />
          <span className="flex justify-center">
            <ZoomImage src={figure6} alt="figure6" />
          </span>
        </p>

        <br />
        <h1
          id="imputation-boosted-cf"
          className="group lg:mt-10 text-2xl font-bold lg:text-3xl text-[#23272F] dark:text-[#F6F7F9] flex items-center"
        >
          <a className="flex items-center" href="#imputation-boosted-cf">
            Imputation Boosted CF
            <RxDrawingPinFilled className="ml-2 text-2xl lg:text-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </h1>
        <p className="lg:mt-6 mt-6 lg:max-w-4xl lg:text-lg leading-7">
          In situations where a dataset is too sparse, imputation techniques
          such as naive Bayes, SVM, and linear regression can be used to fill in
          the missing data.
        </p>
        <br />
        <br />
        <h1
          id="hybrid-model"
          className="group lg:mt-10 text-2xl font-bold lg:text-3xl text-[#23272F] dark:text-[#F6F7F9] flex items-center"
        >
          <a className="flex items-center" href="#hybrid-model">
            Hybrid Model
            <RxDrawingPinFilled className="ml-2 text-2xl lg:text-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </h1>

        <p className="lg:mt-6 mt-6 lg:max-w-4xl lg:text-lg leading-7">
          A hybrid model can be created by combining different recommendation
          system models; for instance, by taking the user-based model's
          prediction into consideration and producing an improved outcome.
        </p>
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
          The item-based collaborative filtering model is a powerful tool in
          building recommendation systems, particularly in addressing data
          sparsity challenges. Using cosine similarity to calculate item
          similarity, this model can provide accurate predictions. However, a
          single model may not be sufficient in practice.
          <br />
          <br />
          Enhancing the item-based model with strategies like default voting,
          focusing on co-rated items, and employing hybrid models can lead to
          more effective results. This approach, combined with testing and
          continuous improvement, can help create a better recommendation system
          that predicts user preferences and enhances user experience.
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
            {showQuiz && <Quiz4 onClose={handleCloseQuiz} />}
          </div>
        </div>

        {/* Navigations */}

        <div className="lg:flex lg:justify-between my-24 lg:mx-22 lg:text-lg text-sm">
          <div className="hover:bg-[#E2E2E2] dark:hover:bg-[#343A46] p-5 rounded-xl lg:text-left">
            <Link to={"/learn/user-based-filtering"}>
              <p className="pl-10">PREVIOUS</p>
              <span className="flex justify-start">
                <IoIosArrowBack />
              </span>
              <p className="text-[#0A7EA3] dark:text-[#58C4DC] pl-10">
                User-based Filtering
              </p>
            </Link>
          </div>

          <div className="hover:bg-[#E2E2E2] dark:hover:bg-[#343A46] p-5 rounded-xl lg:mr-20 text-right">
            <Link to={"/learn/content-based-filtering"}>
              <p className="pr-10">NEXT</p>
              <span className="flex justify-end">
                <IoIosArrowForward />
              </span>
              <p className="text-[#0A7EA3] dark:text-[#58C4DC] pr-10">
                Content-based Filtering
              </p>
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
};
