import React, { useState } from "react";
import colabTypes from "../assets/colab-types.svg";

import output1 from "../assets/output1.svg";
import output2 from "../assets/output2.svg";
import output3 from "../assets/output3.svg";
import output4 from "../assets/output4.svg";
import output5 from "../assets/output5.svg";
import output6 from "../assets/output6.svg";
import output7 from "../assets/output7.svg";
import output8 from "../assets/output8.svg";

import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { FaRegQuestionCircle } from "react-icons/fa";

import { GrNotes } from "react-icons/gr";
import { RxDrawingPinFilled } from "react-icons/rx";

import { Link } from "react-router-dom";
import { Footer } from "./Footer";
import ScrollToTop from "./ScrollToTop";
import Table from "./Table";
import Quiz2 from "../quiz/Quiz2";
import CodeSnippetWithCopy from "./CodeSnippetWithCopy";
import ZoomImage from "./ZoomImage";

export const Collaborative = () => {
  const [showQuiz, setShowQuiz] = useState(false);

  const handleStartQuiz = () => {
    setShowQuiz(true);
  };

  const handleCloseQuiz = () => {
    setShowQuiz(false);
  };

  var code1 = String.raw`
# importing the required pyspark library
from pyspark.sql import SparkSession
from pyspark.ml.evaluation import RegressionEvaluator
from pyspark.ml.recommendation import ALS

# Setup Spark Session
spark = SparkSession.builder.appName('Recommender').getOrCreate()
spark
          `;

  var code2 = String.raw`
# CSV file can be downloaded from the link mentioned above.
data = spark.read.csv('/content/drive/MyDrive/Colab Notebooks/book_ratings.csv',
inferSchema=True,header=True)

data.show(5)
          `;

  var code3 = String.raw`
data.describe().show()
          `;

  var code4 = String.raw`
# Dividing the data using random split into train_data and test_data
# in 80% and 20% respectively
train_data, test_data = data.randomSplit([0.8, 0.2])
          `;

  var code5 = String.raw`
# Build the recommendation model using ALS on the training data 
als = ALS(maxIter=5, 
          regParam=0.01, 
          userCol="user_id", 
          itemCol="book_id", 
          ratingCol="rating") 
  
# Fitting the model on the train_data 
model = als.fit(train_data)
          `;

  var code6 = String.raw`
# Evaluate the model by computing the RMSE on the test data
predictions = model.transform(test_data)

#Displaying predictions calculated by the model
predictions.show()
          `;

  var code7 = String.raw`
# Printing and calculating RMSE
evaluator = RegressionEvaluator(metricName="rmse", labelCol="rating",
predictionCol="prediction")
rmse = evaluator.evaluate(predictions)
print("Root-mean-square error = " + str(rmse))
          `;

  var code8 = String.raw`
# Filtering user with user id "5461" with book id on which it has given the reviews
user1 = test_data.filter(test_data['user_id']==5461).select(['book_id','user_id'])
# Displaying user1 data
user1.show()
          `;

  var code9 = String.raw`
# Traning and evaluating for user1 with our model trained with the help of training data
recommendations = model.transform(user1)

# Displaying the predictions of books for user1
recommendations.orderBy('prediction',ascending=False).show()
          `;

  var code10 = String.raw`
# save the model
model.save("/content/myModel")
          `;

  var code11 = String.raw`
spark.stop()
          `;

  return (
    <div className="aybala dark:text-white">
      <ScrollToTop />
      <main className="lg:ml-[380px] pt-10 mx-7 md:mx-14">
        <p className="lg:mt-10 text-3xl font-bold lg:text-4xl text-[#23272F] dark:text-[#F6F7F9]">
          Collaborative Filtering
        </p>

        <div className="contFont bg-[#F6F7F9] dark:bg-[#343A46] dark:text-white rounded-xl border-2 dark:border-0 my-5 p-7">
          <p className="text-xl font-bold mb-3">What you will learn</p>
          <ul className="list-disc ml-7 leading-7 font-light">
            <li>
              <a
                className="hover:pl-2"
                href="#what-is-collaborative-filtering?"
              >
                What is Collaborative Filtering?
              </a>
            </li>
            <li>
              <a
                className="hover:pl-2"
                href="#types-of-collaborative-filtering"
              >
                Types of collaborative filtering
              </a>
            </li>
            <li className="ml-5">
              <a
                className="hover:pl-2"
                href="#model-based-collaborative-approach"
              >
                Model-based collaborative approach
              </a>
            </li>
            <li className="ml-5">
              <a
                className="hover:pl-2"
                href="#memory-based-collaborative-approach"
              >
                Memory-based collaborative approach
              </a>
            </li>
            <li>
              <a className="hover:pl-2" href="#cold-start-problem">
                Cold Start Problem
              </a>
            </li>
            <li>
              <a
                className="hover:pl-2"
                href="#recommender-system-using-pyspark"
              >
                Recommender System using Pyspark
              </a>
            </li>

            <li>
              <a className="hover:pl-2" href="#user-item-ratings-table">
                User-Item Ratings Table
              </a>
            </li>
          </ul>
        </div>

        <p className="lg:mt-18 mt-12 lg:max-w-4xl lg:text-lg leading-7">
          Building intelligent recommender systems that can improve their
          recommendations as more user data is gathered is most commonly
          accomplished through the use of collaborative filtering.
          <br />
          <br />
          Collaborative filtering is a feature of most websites, including all
          of the major streaming services like Netflix, YouTube, and Amazon.
          Using similar techniques, you may create recommenders that provide
          recommendations to a user based on their likes and dislikes from other
          users.
          <br />
          <br />
        </p>

        <h1
          id="what-is-collaborative-filtering?"
          className="group lg:mt-10 text-2xl font-bold lg:text-3xl text-[#23272F] dark:text-[#F6F7F9]"
        >
          <a
            className="flex items-center"
            href="#what-is-collaborative-filtering?"
          >
            What is Collaborative Filtering?
            <RxDrawingPinFilled className="ml-2 text-2xl lg:text-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </h1>
        <p className="lg:mt-6 mt-6 lg:max-w-4xl lg:text-lg leading-7">
          Collaborative filtering is a technique that can filter out items that
          a user might like on the basis of reactions by similar users.
          <br />
          <br />
          It finds a smaller group of users who have similar likes to a certain
          user by scanning a broad population. It takes a look at the products
          they enjoy and compiles them into a ranked list of recommendations.
          <br />
          <br />
          There are many ways to decide which users are similar and combine
          their choices to create a list of recommendations. This article will
          show you how to do that with Python.
          <br />
          <br />
        </p>

        <h1
          id="types-of-collaborative-filtering"
          className="group lg:mt-10 text-2xl font-bold lg:text-3xl text-[#23272F] dark:text-[#F6F7F9]"
        >
          <a
            className="flex items-center"
            href="#types-of-collaborative-filtering"
          >
            Types of collaborative filtering
            <RxDrawingPinFilled className="ml-2 text-2xl lg:text-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </h1>
        <p className="lg:mt-6 mt-6 lg:max-w-4xl lg:text-lg leading-7">
          The two categories of methods for collaborative filtering are:
          <br />
          <br />
          1. Model-based collaborative approach
          <br />
          2. Memory-based collaborative approach
          <br />
          <br />
          <ZoomImage src={colabTypes} alt="colab-types" />
          <br />
        </p>

        <h1
          id="model-based-collaborative-approach"
          className="group lg:mt-10 text-xl font-bold lg:text-2xl text-[#23272F] dark:text-[#F6F7F9]"
        >
          <a
            className="flex items-center"
            href="#model-based-collaborative-approach"
          >
            Model-based collaborative approach
            <RxDrawingPinFilled className="ml-2 text-2xl lg:text-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </h1>
        <p className="lg:mt-6 mt-6 lg:max-w-4xl lg:text-lg leading-7">
          The model-based approach in machine learning uses models to predict
          and prioritize interactions between users and items they have not yet
          interacted with. These models are trained using existing interaction
          information from the interaction matrix, utilizing various algorithms
          such as matrix factorization, deep learning, clustering, and more.
        </p>
        <br />

        <h1
          id="memory-based-collaborative-approach"
          className="group lg:mt-10 text-xl font-bold lg:text-2xl text-[#23272F] dark:text-[#F6F7F9]"
        >
          <a
            className="flex items-center"
            href="#memory-based-collaborative-approach"
          >
            Memory-based collaborative approach
            <RxDrawingPinFilled className="ml-2 text-2xl lg:text-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </h1>
        <p className="lg:mt-6 mt-6 lg:max-w-4xl lg:text-lg leading-7">
          Memory-based collaborative filtering relies solely on the user-item
          interaction matrix to generate new recommendations for users. The
          entire process is driven by the users' past ratings and interactions.
          <br />
          <br />
          There are two methods for memory-based filtering:{" "}
          <Link
            className="underline font-bold"
            to={"/learn/user-based-filtering"}
          >
            user-based collaborative filtering
          </Link>{" "}
          and{" "}
          <Link
            className="underline font-bold"
            to={"/learn/item-based-filtering"}
          >
            item-based collaborative filtering
          </Link>
          .
          <br />
          <br />
        </p>

        <h1
          id="cold-start-problem"
          className="group lg:mt-10 text-2xl font-bold lg:text-3xl text-[#23272F] dark:text-[#F6F7F9]"
        >
          <a className="flex items-center" href="#cold-start-problem">
            Cold Start Problem
            <RxDrawingPinFilled className="ml-2 text-2xl lg:text-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </h1>
        <p className="lg:mt-6 mt-6 lg:max-w-4xl lg:text-lg leading-7">
          The cold start problem in collaborative filtering refers to the
          difficulty of making accurate recommendations when there is a lack of
          user or item data. This problem arises when new users or items are
          added to a system, and the algorithm has <b>insufficient data</b> to
          make informed recommendations.
          <br />
          <br />
          <b>Causes of the Cold Start Problem:</b>
          <br />
          <br />
          New Users: When a new user joins a platform, there is no historical
          data available to make recommendations.
          <br />
          <br />
          New Items: When a new item is added to a catalog, there is no
          interaction data available to make recommendations.
        </p>
        <br />
        <h1
          id="recommender-system-using-pyspark"
          className="group lg:mt-10 text-2xl font-bold lg:text-3xl text-[#23272F] dark:text-[#F6F7F9]"
        >
          <a
            className="flex items-center"
            href="#recommender-system-using-pyspark"
          >
            Recommender System using Pyspark
            <RxDrawingPinFilled className="ml-2 text-2xl lg:text-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </h1>
        <p className="lg:mt-6 mt-6 lg:max-w-4xl lg:text-lg leading-7">
          Collaborative Filtering is the technique we will use to implement
          this. Collaborative Filtering involves making predictions about a
          user's preferences by analyzing the preferences and tastes of multiple
          users. The underlying idea is that if two users A and B have similar
          opinions on one subject, then A is more likely to share B's opinion on
          a related but different subject, x, compared to the opinion of a
          randomly selected user.
          <br />
          <br />
          Collaborative filtering is implemented by the machine learning library
          Spark MLlib using Alternating Least Squares. These parameters apply to
          the MLlib implementation:
          <br />
          <br />
          <ul className="ml-10 list-disc">
            <li>
              The number of blocks for parallel computation is controlled by the
              <b> numBlocks</b> parameter, which can be set to -1 for automatic
              configuration.
            </li>
            <br />
            <li>The number of latent factors in the model is its rank.</li>
            <br />
            <li>
              The number of iterations to execute is known as an iteration.
            </li>
            <br />
            <li>
              The regularization parameter in the{" "}
              <b>Alternating Least Squares </b>
              (ALS) algorithm for Collaborative Filtering is specified by the
              lambda parameter.
            </li>
            <br />
            <li>
              The <b>implicitPrefs</b> parameter determines whether to use the
              <b> Alternating Least Squares</b> (ALS) variation tailored for
              implicit feedback data or the explicit feedback variant.
            </li>
            <br />
            <li>
              The implicit feedback variant of the{" "}
              <b>Alternating Least Squares </b>
              (ALS) algorithm has a parameter called alpha that controls the
              initial level of confidence in the preference observations.
            </li>
          </ul>
          <br />
          <br />
          In this case, we will use the{" "}
          <Link
            className="underline"
            to="https://drive.google.com/file/d/1lvWO2ewsoGM56-_Y1F4pW9Mcc_QPm8yr/view"
            target="_blank"
          >
            book reviews dataset
          </Link>{" "}
          to implement the Collaborative Filtering algorithm.
          <br />
          <br />
          <b>Step 1:</b> Import the necessary libraries and functions and Setup
          Spark Session
        </p>
        <CodeSnippetWithCopy code={code1} />
        <p className="lg:mt-6 mt-6 lg:max-w-4xl lg:text-lg leading-7">
          <b>Output:</b>
          <br />
          <br />
          <ZoomImage src={output1} alt="output1" />
          <br />
          <b>Step 2:</b> Reading the data from the data set
        </p>

        <CodeSnippetWithCopy code={code2} />

        <p className="lg:mt-6 mt-6 lg:max-w-4xl lg:text-lg leading-7">
          <b>Output:</b>
          <br />
          <br />
          <ZoomImage src={output2} alt="output2" />
          <br />
          <b>Describe the dataset</b>
        </p>

        <CodeSnippetWithCopy code={code3} />

        <p className="lg:mt-6 mt-6 lg:max-w-4xl lg:text-lg leading-7">
          <b>Output:</b>
          <br />
          <br />
          <ZoomImage src={output3} alt="output3" />
          <br />
          <b>Step 3:</b> Splitting the data into training and testing
        </p>

        <CodeSnippetWithCopy code={code4} />
        <br />
        <p className="lg:mt-6 mt-6 lg:max-w-4xl lg:text-lg leading-7">
          <b>Step 4:</b> Import the Alternating Least Squares(ALS) Method and
          apply it.
        </p>

        <CodeSnippetWithCopy code={code5} />
        <br />
        <p className="lg:mt-6 mt-6 lg:max-w-4xl lg:text-lg leading-7">
          <b>Step 5:</b> Predictions
        </p>
        <CodeSnippetWithCopy code={code6} />
        <p className="lg:mt-6 mt-6 lg:max-w-4xl lg:text-lg leading-7">
          <b>Output:</b>
          <br />
          <br />
          <ZoomImage src={output4} alt="output4" />
          <br />
          <b>Evaluations</b>
        </p>
        <CodeSnippetWithCopy code={code7} />
        <p className="lg:mt-6 mt-6 lg:max-w-4xl lg:text-lg leading-7">
          <b>Output:</b>
          <br />
          <br />
          <ZoomImage src={output5} alt="output5" />
          <br />
          <b>Step 6:</b> Recommendations
          <br />
          <br />
          Now, we will predict/recommend the book to a single user – user1
          (let’s say, userId:5461) with the help of our trained model.
        </p>
        <CodeSnippetWithCopy code={code8} />

        <p className="lg:mt-6 mt-6 lg:max-w-4xl lg:text-lg leading-7">
          <b>Output:</b>
          <br />
          <br />
          <ZoomImage src={output6} alt="output6" />
        </p>

        <CodeSnippetWithCopy code={code9} />

        <p className="lg:mt-6 mt-6 lg:max-w-4xl lg:text-lg leading-7">
          <b>Output:</b>
          <br />
          <br />
          <ZoomImage src={output7} alt="output7" />
        </p>

        <div className="flex flex-col p-7 rounded-xl bg-[#ccf8ec] dark:bg-[#26353A] lg:mt-6 mt-6 lg:max-w-4xl text-sm lg:text-base leading-7">
          <p className="mb-5 font-bold flex">
            <GrNotes className="text-2xl mr-4" />
            <span className="lg:text-xl text-lg">Note</span>
          </p>
          <p>
            The provided output contains predictions for book IDs for the user
            with user ID "5461".
          </p>
        </div>

        <p className="lg:mt-6 mt-6 lg:max-w-4xl lg:text-lg leading-7">
          <b>Step 7:</b> Saving the model to "myModel" folder
        </p>

        <CodeSnippetWithCopy code={code10} />

        <p className="lg:mt-6 mt-6 lg:max-w-4xl lg:text-lg leading-7">
          <ZoomImage src={output8} alt="output8" />
        </p>

        <p className="lg:mt-6 mt-6 lg:max-w-4xl lg:text-lg leading-7">
          <b>Step 7:</b> Stop the spark
        </p>

        <CodeSnippetWithCopy code={code11} />

        <p className="lg:mt-6 mt-6 lg:max-w-4xl lg:text-lg leading-7">
          We can now use the trained model to get prediction values for a table
          of <b>user-item</b> ratings. We will input rating values between{" "}
          <b>1</b> and <b>5</b> for the known user ratings, and the model will
          predict and output the values for the unknown ratings denoted as{" "}
          <b>"None"</b> in the table.
        </p>

        <br />
        <br />

        {/* --------USER-ITEM RATING TABLE---------- */}

        <Table />

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
            {showQuiz && <Quiz2 onClose={handleCloseQuiz} />}
          </div>
        </div>

        <div className="lg:flex lg:justify-between my-24 lg:mx-22 lg:text-lg text-sm">
          <div className="hover:bg-[#E2E2E2] dark:hover:bg-[#343A46] p-5 rounded-xl lg:text-left">
            <Link to={"/learn/introduction"}>
              <p className="pl-10">PREVIOUS</p>
              <span className="flex justify-start">
                <IoIosArrowBack />
              </span>
              <p className="text-[#0A7EA3] dark:text-[#58C4DC] pl-10">
                Introduction
              </p>
            </Link>
          </div>

          <div className="hover:bg-[#E2E2E2] dark:hover:bg-[#343A46] p-5 rounded-xl lg:mr-20 text-right">
            <Link to={"/learn/user-based-filtering"}>
              <p className="pr-10">NEXT</p>
              <span className="flex justify-end">
                <IoIosArrowForward />
              </span>
              <p className="text-[#0A7EA3] dark:text-[#58C4DC] pr-10">
                User-based filtering
              </p>
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
};
