import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Footer } from "./Footer";
import ScrollToTop from "./ScrollToTop";

import sessionbased from "../assets/sessionbased.svg";
import picture1 from "../assets/picture1.svg";
import picture2 from "../assets/picture2.svg";
import picture3 from "../assets/picture3.svg";
import picture4 from "../assets/picture4.svg";

import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { FaRegQuestionCircle } from "react-icons/fa";

import { GrNotes } from "react-icons/gr";
import { RxDrawingPinFilled } from "react-icons/rx";

import Quiz6 from "../quiz/Quiz6";
import CodeSnippetWithCopy from "./CodeSnippetWithCopy";
import ZoomImage from "./ZoomImage";

export const Sessionbased = () => {
  const [showQuiz, setShowQuiz] = useState(false);

  const handleStartQuiz = () => {
    setShowQuiz(true);
  };

  const handleCloseQuiz = () => {
    setShowQuiz(false);
  };

  var code26 = String.raw`
session_1 = [1, 2, 5]
        `;

  var code27 = String.raw`
import pandas as pd
data = pd.read_csv("2019-Oct.csv")
  
# drop NaN values in specific columns
data = data.dropna(subset=["category_code", "brand", "user_session", "product_id"])
  
# keep only relevant columns in our dataset
data = data[["event_type", "product_id", "category_code", "brand", "user_session"]]
        `;

  var code28 = String.raw`
# select where to split the data
split_at = 2000000

#  make sure the split doesn't cut off session data
while data_clean["user_session"].iloc[split_at-1] == data_clean["user_session"].iloc[split_at]:
    split_at += 1
    
# perform the split
split_range = list(range(0, split_at))
data_clean_subset = data_clean.iloc[split_range]
        `;

  var code29 = String.raw`
# create a dataset that w2v can train on
def create_w2v_data(df):
    sessions, session = [], []
    for index, value in df.iterrows():
        if index != 0:
            if str(value["user_session"]) == str(df.at[index-1, "user_session"]):
                session.append(str(value["product_id"]))
            else:
                if len(session) != 0:
                    sessions.append(session)
                session = [str(value["product_id"])]
        else:
            session.append(str(value["product_id"]))
    return sessions
        `;

  var code30 = String.raw`
from gensim.models import Word2Vec

# training the W2V model
model = Word2Vec(sentences=data_w2v, 
                 vector_size=100, 
                 window=longest_session, 
                 min_count=3, 
                 workers=4)
        `;

  return (
    <div className="aybala dark:text-white">
      <ScrollToTop />
      <main className="lg:ml-[380px] pt-10 mx-7 md:mx-14">
        <p className="lg:mt-10 text-3xl font-bold lg:text-4xl text-[#23272F] dark:text-[#F6F7F9]">
          Session-based Recommender Systems
        </p>

        <div className="contFont bg-[#F6F7F9] dark:bg-[#343A46] dark:text-white rounded-xl border-2 dark:border-0 my-5 p-7">
          <p className="text-xl font-bold mb-3">What you will learn</p>
          <ul className="list-disc ml-7 leading-7 font-light">
            <li>
              <a
                className="hover:pl-2"
                href="#session-based-collaborative-filtering"
              >
                Session-based collaborative filtering
              </a>
            </li>
            <li>
              <a
                className="hover:pl-2"
                href="#session-based-recommender-systems-with-word2vec"
              >
                Session-Based Recommender Systems with Word2Vec
              </a>
            </li>
            <li>
              <a className="hover:pl-2" href="#why-use-word2vec?">
                Why use Word2Vec?
              </a>
            </li>
            <li>
              <a className="hover:pl-2" href="#python-codes">
                Python codes
              </a>
            </li>
            <li>
              <a className="hover:pl-2" href="#data-preprocessing">
                Data Preprocessing
              </a>
            </li>
            <li>
              <a
                className="hover:pl-2"
                href="#building-the-w2v-recommender-system"
              >
                Building the W2V Recommender System
              </a>
            </li>
            <li>
              <a className="hover:pl-2" href="#training-the-model">
                Training the Model
              </a>
            </li>
            <li>
              <a className="hover:pl-2" href="#testing-and-visualization">
                Testing and Visualization
              </a>
            </li>
            <li>
              <a className="hover:pl-2" href="#visualisation">
                Visualisation
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
          id="session-based-collaborative-filtering"
          className="lg:mt-6 mt-6 lg:max-w-4xl lg:text-lg leading-7"
        >
          A Session-based recommender system is a type of recommender system
          that focuses on recommending items based on a user’s behavior within a
          specific session or time frame, rather than their overall behavior or
          preferences. This approach is particularly useful when there is
          limited or no information about the user’s long-term preferences or
          behavior.
          <br />
          <br />
          In a session-based recommender system, a session is typically defined
          as a sequence of interactions (e.g., clicks, purchases, or views) made
          by a user within a certain time frame, such as a few minutes, hours,
          or days. The system analyzes the user’s behavior within this session
          to predict their likelihood of interacting with a particular item or
          set of items.
          <br />
          <br />
          <span className="flex justify-center">
            <ZoomImage src={sessionbased} alt="sessionbased" />
          </span>
        </h1>
        <br />
        <br />

        <h1
          id="session-based-recommender-systems-with-word2vec"
          className="group lg:mt-10 text-2xl font-bold lg:text-3xl text-[#23272F] dark:text-[#F6F7F9] flex items-center"
        >
          <a
            className="flex items-center"
            href="#session-based-recommender-systems-with-word2vec"
          >
            Session-Based Recommender Systems with Word2Vec
            <RxDrawingPinFilled className="ml-2 text-2xl lg:text-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </h1>

        <p className="lg:mt-6 mt-6 lg:max-w-4xl lg:text-lg leading-7">
          The <b>Word2Vec</b> technique is used in the field of{" "}
          <b>Natural Language Processing</b> (NLP). Since it was first published
          in 2013,{" "}
          <Link to="https://arxiv.org/abs/1301.3781" target="_blank">
            <u>the work of T. Mikolov et al.</u>
          </Link>{" "}
          has grown in prominence and shown state-of-the-art outcomes in a
          number of NLP applications. Even though a number of more recent and
          effective models have been released since then, Word2Vec is still
          necessary when dealing with natural language processing (NLP) or
          information retrieval (IR).
          <br />
          <br />
          Apart from its common application in natural language processing, the
          underlying Word2Vec method has other applications such as specific
          kinds of recommendation system issues.
          <br />
          <br />
          Here we will be looking at how we can make use of{" "}
          <b>Word2Vec’s CBOW algorithm</b> to build a simple{" "}
          <b>Recommendation System for session-based data.</b>
        </p>
        <br />
        <br />
        <h1
          id="why-use-word2vec?"
          className="group lg:mt-10 text-2xl font-bold lg:text-3xl text-[#23272F] dark:text-[#F6F7F9] flex items-center"
        >
          <a className="flex items-center" href="#why-use-word2vec?">
            Why use Word2Vec?
            <RxDrawingPinFilled className="ml-2 text-2xl lg:text-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </h1>
        <p className="lg:mt-6 mt-6 lg:max-w-4xl lg:text-lg leading-7">
          The specific type of Recommendation System we will be focusing on in
          this article are so-called session-based. In these cases we want to
          focus on giving next-click recommendations to anonymous users, based
          on their current browser session.
          <br />
          <br />
          Let's take the example of an e-commerce website that offers a variety
          of goods in several categories. We may have a user visit our website
          and peruse our product catalogue at any point. Our objective is, of
          course, to have the user add an item to their cart and then make a
          purchase. Our goal is to provide "relevant" product recommendations to
          our users with the aid of recommendation systems. This not only makes
          shopping more enjoyable for the consumer, but it may also make
          purchases more likely.
          <br />
          <br />
          On the other hand, if our users remain anonymous to us, we do not
          possess any past information about them, such as past transactions or
          browser sessions. Giving "relevant recommendations" becomes more
          difficult as a result.
          <br />
          <br />
          This is where Word2Vec becomes useful. When properly trained, Word2Vec
          is a model that can interpret words according to their context. Now,
          using the example from above, we may have the following historical
          session data for a user that is anonymous:
        </p>
        <br />
        <CodeSnippetWithCopy code={code26} />
        <br />
        <p className="lg:mt-6 mt-6 lg:max-w-4xl lg:text-lg leading-7">
          During the current session, a user has looked at products 1, 2, and 5.
          If we collect enough of these kinds of session data, we may utilise
          them—more precisely, the CBOW algorithm—as input vectors in a Word2Vec
          model. This will allow our model to assign a meaning to our items and
          ascertain which context (i.e., session) they are most likely to belong
          in.
        </p>
        <br />
        <div className="flex flex-col p-7 rounded-xl bg-[#ccf8ec] dark:bg-[#26353A] lg:mt-6 mt-6 lg:max-w-4xl text-sm lg:text-base leading-7">
          <p className="mb-5 font-bold flex">
            <GrNotes className="text-2xl mr-4" />
            <span className="lg:text-xl text-lg">Note</span>
          </p>
          <p>
            For our use-case we can translate “words” to “products”, and
            “context” to “session”.
          </p>
        </div>
        <br />
        <p className="lg:mt-6 mt-6 lg:max-w-4xl lg:text-lg leading-7">
          Recommending products from the same broad category may not be as
          relevant as using Word2Vec, as products in the same category can still
          differ significantly. Since this approach has been explained, the next
          step is to implement it and see the practical results, as this more
          complex method has the potential to provide more personalized and
          relevant product recommendations to the user.
        </p>
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
        <p className="lg:mt-6 mt-6 lg:max-w-4xl lg:text-lg leading-7">
          We'll be using a Kaggle dataset for our use case, which includes
          e-commerce information from a multi-category store (source:{" "}
          <Link
            to="https://www.kaggle.com/datasets/mkechinov/ecommerce-behavior-data-from-multi-category-store?select=2019-Oct.csv"
            target="_blank"
          >
            <b>
              <u>Kaggle.com</u>
            </b>
          </Link>{" "}
          and{" "}
          <Link to="https://rees46.com/" target="_blank">
            <b>
              <u>REES46 Marketing Platform</u>
            </b>
          </Link>
          ). Since the datasets are somewhat large, I will be using a portion of
          the original dataset from October 2019 for simplicity and
          illustration.
          <br />
          <br />
          Now let's have a look at our data:
          <br />
          <br />
          <ZoomImage src={picture1} alt="picture1" />
          <br />
          We focus on a few key features:{" "}
          <b>event_type, product_id, category_code </b>
          and <b>user_session.</b> Although the dataset includes{" "}
          <b>user_id values, </b>
          we will not use them because this example demonstrates recommendations
          based solely on anonymous user session data.
          <br />
          <br />
          The event_type variable indicates the event within a session, such as
          "view," "cart," or "purchased." We'll input vectors of{" "}
          <b>product_id</b>'s from each session into our Word2Vec model. Later,
          we'll use the
          <b> category_code</b> data to test our model's predictions.
        </p>
        <br />
        <br />
        <h1
          id="data-preprocessing"
          className="group lg:mt-10 text-2xl font-bold lg:text-3xl text-[#23272F] dark:text-[#F6F7F9] flex items-center"
        >
          <a className="flex items-center" href="#data-preprocessing">
            Data Preprocessing Data Preprocessing
            <RxDrawingPinFilled className="ml-2 text-2xl lg:text-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </h1>
        <p className="lg:mt-6 mt-6 lg:max-w-4xl lg:text-lg leading-7">
          Before using the data in our Word2Vec model, we need to perform some
          preprocessing with the Pandas library.
          <br />
          <br />
          First, we remove any missing values. Then, we keep only the relevant
          columns. These steps are shown in the code below:
        </p>

        <CodeSnippetWithCopy code={code27} />

        <p className="lg:mt-6 mt-6 lg:max-w-4xl lg:text-lg leading-7">
          For demonstration purposes, we'll use only a subset of the original
          data. As shown in the code below, we first sort the data by
          user_session to ensure all data from each session is grouped together.
          Then, we select index 2,000,000 as our splitting point.
        </p>

        <CodeSnippetWithCopy code={code28} />

        <p className="lg:mt-6 mt-6 lg:max-w-4xl lg:text-lg leading-7">
          To ensure our data is not split in the middle of a session, we
          increment our split index (<b>`split_at`</b>) by 1 until the next row
          belongs to a new session. We then perform the actual split from the
          first row to the determined split index. In our case, the dataset is
          split at row index 2,000,006, resulting in a subset with 483,508
          unique browsing sessions.
        </p>
        <br />
        <br />

        <h1
          id="building-the-w2v-recommender-system"
          className="group lg:mt-10 text-2xl font-bold lg:text-3xl text-[#23272F] dark:text-[#F6F7F9] flex items-center"
        >
          <a
            className="flex items-center"
            href="#building-the-w2v-recommender-system"
          >
            Building the W2V Recommender System
            <RxDrawingPinFilled className="ml-2 text-2xl lg:text-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </h1>

        <p className="lg:mt-6 mt-6 lg:max-w-4xl lg:text-lg leading-7">
          Now that our data is cleaned and processed, we can proceed with
          building our Word2Vec-based Recommender System using the Gensim
          library, which offers a practical implementation of the Word2Vec
          algorithms from the original paper.
          <br />
          <br />
          To train our Word2Vec model with Gensim, we need to format our data
          correctly. Gensim requires a list of vectors as input, so we'll
          transform our data using the following <b>create_w2v_data</b> helper
          function:
        </p>

        <br />
        <CodeSnippetWithCopy code={code29} />
        <br />

        <p className="lg:mt-6 mt-6 lg:max-w-4xl lg:text-lg leading-7">
          This function takes a <b>Pandas</b> dataframe as input and outputs a
          list of sessions, where each session is a list of all products that
          were viewed, added to the cart, or purchased within that session.
          Although it might take a few minutes to run, the resulting data will
          look like this:
        </p>

        <p className="p-7 rounded-xl bg-[#edecec] dark:bg-[#374151] lg:mt-6 mt-6 lg:max-w-4xl text-sm lg:text-base leading-7 font-mono">
          [['2501061'],
          <br />
          ['2701673', '2701773'],
          <br />
          ['2900802', '2900090', '2900802', '2900803'],
          <br />
          ['1004573'],
          <br />
          ['1004792'],
          <br />
          ... <br />]
        </p>

        <p className="lg:mt-6 mt-6 lg:max-w-4xl lg:text-lg leading-7">
          Since we combine all three event types (view, cart, purchased) in our
          data, a purchased product will appear three times within the same
          session. This is beneficial as it increases the relevancy of purchased
          products, making them more prominent in the dataset.
          <br />
          <br />
          The average session length is 4.14, with the longest session
          consisting of 324 products viewed, added to the cart, or purchased.
        </p>
        <br />
        <br />
        <h1
          id="training-the-model"
          className="group lg:mt-10 text-2xl font-bold lg:text-3xl text-[#23272F] dark:text-[#F6F7F9] flex items-center"
        >
          <a className="flex items-center" href="#training-the-model">
            Training the Model
            <RxDrawingPinFilled className="ml-2 text-2xl lg:text-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </h1>
        <p className="lg:mt-6 mt-6 lg:max-w-4xl lg:text-lg leading-7">
          Finally, we can start training our model! Using the Gensim library,
          this can be accomplished in just a few lines of code:
        </p>

        <CodeSnippetWithCopy code={code30} />

        <p className="lg:mt-6 mt-6 lg:max-w-4xl lg:text-lg leading-7">
          We set up our model with the prepared list of sessions as input data
          and configure the model parameters. We set <b>min_count</b> to 3,
          ensuring the model trains only on products that appear at least 3
          times in the dataset—meaning a product must be viewed at least 3
          times, or viewed twice and added to the cart once, or purchased at
          least once. We also use a <b>window_size</b> corresponding to the
          longest session in our dataset, allowing us to consider all products
          viewed in a session. The rest of the parameters are left as
          recommended by the Gensim library:
        </p>
        <br />
        <br />
        <h1
          id="testing-and-visualization"
          className="group lg:mt-10 text-2xl font-bold lg:text-3xl text-[#23272F] dark:text-[#F6F7F9] flex items-center"
        >
          <a className="flex items-center" href="#testing-and-visualization">
            Testing and Visualization
            <RxDrawingPinFilled className="ml-2 text-2xl lg:text-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </h1>
        <p className="lg:mt-6 mt-6 lg:max-w-4xl lg:text-lg leading-7">
          Let's look at the recommendations generated by our model. If a user
          views a specific type of headphones, identified by <b>product_id</b>{" "}
          4802936, we can retrieve the recommended products using the Gensim
          function <b>predict_output_word</b>. Here are the top 10
          recommendations:
          <br />
          <br />
          <ZoomImage src={picture2} alt="picture2" />
          <br />
          Our model successfully identified the similarity between these
          products, recognizing their shared category. Thus, if a user views
          headphones with ID 4802936, the model would suggest alternative
          headphones. Similarly, we can apply this process to product ID
          42300039, a "cabinet" in the "living room" category.
          <br />
          <br />
          <ZoomImage src={picture3} alt="picture3" />
          <br />
          Again, we see that our model manages to recommend relevant items.
        </p>
        <br />
        <br />
        <h1
          id="visualisation"
          className="group lg:mt-10 text-2xl font-bold lg:text-3xl text-[#23272F] dark:text-[#F6F7F9] flex items-center"
        >
          <a className="flex items-center" href="#visualisation">
            Visualisation
            <RxDrawingPinFilled className="ml-2 text-2xl lg:text-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </h1>
        <p className="lg:mt-6 mt-6 lg:max-w-4xl lg:text-lg leading-7">
          The model effectively recognized the similarity among these products,
          acknowledging their common category. Consequently, if a user views
          headphones with ID 4802936, the model would recommend alternative
          headphones. Likewise, we can employ the same approach for product ID
          42300039, which is a "cabinet" categorized under "living room".
          <br />
          <br />
          The plot will display 2-dimensional product embedding vectors, colored
          according to their respective categories. For simplicity, we'll group
          them by their main category, which is the first category listed in the
          category name. Below is the resulting plot:
          <br />
          <br />
          <br />
          <ZoomImage src={picture4} alt="picture4" />
          <br />
          The plot above demonstrates impressive results! It indicates that our
          model effectively groups products by their categories.
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
          In conclusion, this article has shown how to swiftly and effectively
          construct a robust Recommendation System for anonymous session-based
          data using the Word2Vec CBOW algorithm.
          <br />
          <br />
          For future endeavors, the model could be further refined and evaluated
          through various approaches. For instance, experimenting with different
          training input parameters such as <b>window</b> size and{" "}
          <b>min_count</b> could provide insights into the resulting
          recommendations.
        </p>
        <br />
        <br />
        {/* QUIZ SECTION */}
        <div className="flex flex-col p-7 rounded-xl bg-[#e0e2f8] dark:bg-[#26353A] lg:mt-6 mt-6 lg:max-w-4xl text-sm lg:text-base leading-7">
          <p className="mb-5 font-bold flex justify-center">
            <FaRegQuestionCircle className="text-3xl mr-4" />
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
            {showQuiz && <Quiz6 onClose={handleCloseQuiz} />}
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

          {/* <div className="hover:bg-[#E2E2E2] dark:hover:bg-[#343A46] p-5 rounded-xl lg:mr-20 text-right">
            <Link onClick={scrollToTop} to={"/learn/content-based-filtering"}>
              <p className="pr-10">NEXT</p>
              <span className="flex justify-end">
                <IoIosArrowForward />
              </span>
              <p className="text-[#0A7EA3] dark:text-[#58C4DC] pr-10">
                Content-based Filtering
              </p>
            </Link>
          </div> */}
        </div>
        <Footer />
      </main>
    </div>
  );
};
