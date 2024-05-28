import React, { useState } from "react";

import table1 from "../assets/table1.svg";
import table2 from "../assets/table2.svg";
import table3 from "../assets/table3.svg";
import table4 from "../assets/table4.svg";
import table5 from "../assets/table5.svg";
import table6 from "../assets/table6.svg";
import table7 from "../assets/table7.svg";
import table8 from "../assets/table8.svg";
import table9 from "../assets/table9.svg";
import table10 from "../assets/table10.svg";
import table11 from "../assets/table11.svg";
import table12 from "../assets/table12.svg";
import table13 from "../assets/table13.svg";
import table14 from "../assets/table14.svg";

import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { FaRegQuestionCircle } from "react-icons/fa";

import { GrNotes } from "react-icons/gr";
import { RxDrawingPinFilled } from "react-icons/rx";

import { Link } from "react-router-dom";

import { Footer } from "./Footer";
import ScrollToTop from "./ScrollToTop";
import Quiz5 from "../quiz/Quiz5";
import ZoomImage from "./ZoomImage";

export const Contentbased = () => {
  const [showQuiz, setShowQuiz] = useState(false);

  const handleStartQuiz = () => {
    setShowQuiz(true);
  };

  const handleCloseQuiz = () => {
    setShowQuiz(false);
  };

  return (
    <div className="aybala dark:text-white">
      <ScrollToTop />
      <main className="lg:ml-[380px] pt-10 mx-7 md:mx-14">
        <p className="lg:mt-10 text-3xl font-bold lg:text-4xl text-[#23272F] dark:text-[#F6F7F9]">
          Content-based Collaborative Filtering
        </p>

        <div className="contFont bg-[#F6F7F9] dark:bg-[#343A46] dark:text-white rounded-xl border-2 dark:border-0 my-5 p-7">
          <p className="text-xl font-bold mb-3">What you will learn</p>
          <ul className="list-disc ml-7 leading-7 font-light">
            <li>
              <a
                className="hover:pl-2"
                href="#content-based-collaborative-filtering"
              >
                Content-based collaborative filtering
              </a>
            </li>
            <li>
              <a
                className="hover:pl-2"
                href="#term-frequency&inverse-document-frequency"
              >
                Term Frequency & Inverse Document Frequency
              </a>
            </li>
            <li>
              <a
                className="hover:pl-2"
                href="#how-does-vector-space-model-works?"
              >
                How does Vector Space Model Works?
              </a>
            </li>
            <li>
              <a className="hover:pl-2" href="#how-to-calculate-tf–idf?">
                How to Calculate TF – IDF?
              </a>
            </li>
            <li>
              <a className="hover:pl-2" href="#term-frequency-tf">
                Term Frequency (TF)
              </a>
            </li>
            <li>
              <a className="hover:pl-2" href="#inverse-document-frequency-idf">
                Inverse Document Frequency (IDF)
              </a>
            </li>
            <li>
              <a className="hover:pl-2" href="#creating-binary-representation">
                Creating Binary Representation
              </a>
            </li>
            <li>
              <a
                className="hover:pl-2"
                href="#building-a-content-based-recommender-for-analytics-vidhya-av"
              >
                Building a Content Based Recommender for Analytics Vidhya (AV)
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
          id="content-based-collaborative-filtering"
          className="lg:mt-6 mt-6 lg:max-w-4xl lg:text-lg leading-7"
        >
          A recommender system that is Content-based uses information provided
          by the user, either directly (like a rating) or indirectly (like
          clicking on a link). These data are utilized to create a user profile,
          which is subsequently used to provide recommendations to the user. The
          engine gets more and more accurate the more information the user
          enters or acts upon the suggestions.
          <br />
          <br />
          <span className="flex justify-center">
            <ZoomImage src={table1} alt="table1" />
          </span>
          <br />
          <br />
          High-frequency words appear to have less of an impact, and these
          values are more similar to one another than they were to the initial
          raw term frequency.
          <br />
          <br />
          How can we identify which items are more similar to one another than
          they are to the user profile once the TF-IDF scores have been
          calculated? The Vector Space Model, which calculates the proximity
          based on the angle between the vectors, is used to do this.
        </h1>
        <br />
        <br />

        <h1
          id="term-frequency&inverse-document-frequency"
          className="group lg:mt-10 text-2xl font-bold lg:text-3xl text-[#23272F] dark:text-[#F6F7F9] flex items-center"
        >
          <a
            className="flex items-center"
            href="#term-frequency&inverse-document-frequency"
          >
            Term Frequency & Inverse Document Frequency
            <RxDrawingPinFilled className="ml-2 text-2xl lg:text-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </h1>

        <p className="lg:mt-6 mt-6 lg:max-w-4xl lg:text-lg leading-7">
          The frequency of a word in a document is known as its TF. IDF is the
          document frequency inverse across the entire corpus of documents.
          There are two main reasons why TF-IDF is used: Let's say we use Google
          to look for <b>"the rise of analytics"</b>, <b>"the"</b> will
          undoubtedly appear more frequently than <b>"analytics,"</b> yet
          analytics is more significant in comparison to the search query point
          of view. In these situations, the influence of high frequency words in
          judging the significance of an item (document) is neutralised by
          TF-IDF weighting.
          <br />
          <br />
          However, log is utilized to reduce the impact of high-frequency terms
          when computing TF-IDF. For instance, there are significant differences
          between TF = 3 and TF = 4, as well as between TF = 10 and TF = 1000.
          Stated differently, a word's importance in a document cannot be
          determined by a straightforward raw count, which leads to the
          following equation:
          <br />
          <br />
          <span className="flex justify-center">
            <ZoomImage src={table2} alt="table2" />
          </span>
        </p>
        <br />
        <br />
        <br />
        <br />

        <h1
          id="how-does-vector-space-model-works?"
          className="group lg:mt-10 text-2xl font-bold lg:text-3xl text-[#23272F] dark:text-[#F6F7F9] flex items-center"
        >
          <a
            className="flex items-center"
            href="#how-does-vector-space-model-works?"
          >
            How does Vector Space Model Works?
            <RxDrawingPinFilled className="ml-2 text-2xl lg:text-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </h1>
        <p className="lg:mt-6 mt-6 lg:max-w-4xl lg:text-lg leading-7">
          According to this approach, every object is represented as a vector in
          an <b>n-dimensional space</b> together with its properties, which are
          also vectors. The <b>similarity between the vectors</b> is computed
          based on the angles between the vectors. The resemblance between an
          item and a user is then ascertained in a similar manner, and the user
          profile vectors are likewise generated based on his activities on
          prior item attributes.
          <br />
        </p>

        <p className="lg:mt-6 mt-6 lg:max-w-4xl lg:text-lg leading-7">
          <br />
          <span className="flex justify-center">
            <ZoomImage src={table3} alt="table3" />
          </span>
          <br />
          <br />A two-dimensional depiction of the properties Cloud and
          Analytics is displayed above. M1 and M2 are files. Users U1 and U2 are
          involved. While M1 is more about cloud than analytics, M2 is more
          about analytics than cloud. You must be curious in how documents are
          ranked in terms of relative importance. Hold on, that's what we're
          getting to.
          <br />
          <br />
          User U1 prefers articles about "cloud" over those about "analytics,"
          and user U2 feels the opposite. The cosine of the angle formed by the
          user profile{" "}
          <b>
            <i>(Ui)</i>
          </b>{" "}
          vector and the document vector is used to determine the user's
          preferences, dislikes, and measures.
          <br />
          <br />
          Cosine is eventually utilised because its value <b>increases</b> as
          the angle between it and the source <b>decreases</b>, indicating
          greater similarity. Following their length normalisation, the vectors
          become vectors of length 1, and the computation of the cosine is just
          the sum of the vectors. In the following section, we will calculate
          vector similarities using the Excel function sum-product, which
          accomplishes the same task.
        </p>
        <br />
        <br />
        <h1
          id="how-to-calculate-tf–idf?"
          className="group lg:mt-10 text-2xl font-bold lg:text-3xl text-[#23272F] dark:text-[#F6F7F9] flex items-center"
        >
          <a className="flex items-center" href="#how-to-calculate-tf–idf?">
            How to Calculate TF – IDF?
            <RxDrawingPinFilled className="ml-2 text-2xl lg:text-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </h1>

        <p className="lg:mt-6 mt-6 lg:max-w-4xl lg:text-lg leading-7">
          Let's use an example to comprehend this better. Let's say we conduct a
          Google search for{" "}
          <b>
            <i>"IoT and analytics"</i>
          </b>{" "}
          and the top 5 results include a frequency count of the following
          words:
          <br />
          <br />
          <ZoomImage src={table4} alt="table4" />
          <br />
          The words{" "}
          <b>
            <i>analytics</i>
          </b>{" "}
          and{" "}
          <b>
            <i>data</i>
          </b>{" "}
          are found in 5,000 and 50,000 of the corpus of papers and blogs that
          are searched for articles, respectively. The same counts apply to
          other words. Assuming a corpus of documents of one million (10^6),
          let's proceed.
        </p>
        <br />
        <br />
        <h1
          id="term-frequency-tf"
          className="group lg:mt-10 text-2xl font-bold lg:text-3xl text-[#23272F] dark:text-[#F6F7F9] flex items-center"
        >
          <a className="flex items-center" href="#term-frequency-tf">
            Term Frequency (TF)
            <RxDrawingPinFilled className="ml-2 text-2xl lg:text-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </h1>
        <p className="lg:mt-6 mt-6 lg:max-w-4xl lg:text-lg leading-7">
          <ZoomImage src={table5} alt="table5" />
          <br />
          The word Analytics for article 1 has a TF of{" "}
          <b>
            1+ log<sub>10</sub>21 = 2.322
          </b>
          , as can be seen in the illustration above. TF is computed for
          additional properties of every article in this manner. The attribute
          vector for every article is composed of these values.
        </p>
        <br />
        <br />
        <h1
          id="inverse-document-frequency-idf"
          className="group lg:mt-10 text-2xl font-bold lg:text-3xl text-[#23272F] dark:text-[#F6F7F9] flex items-center"
        >
          <a
            className="flex items-center"
            href="#inverse-document-frequency-idf"
          >
            Inverse Document Frequency (IDF)
            <RxDrawingPinFilled className="ml-2 text-2xl lg:text-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </h1>

        <p className="lg:mt-6 mt-6 lg:max-w-4xl lg:text-lg leading-7">
          The logarithmic inverse of the document frequency throughout the
          entire corpus of texts is used to compute the IDF. Therefore, if our
          search query yields a total of 1 million pages, and 0.5 million of
          those papers contain the word{" "}
          <b>
            <i>"smart"</i>.
          </b>
          <br />
          Then it will have an IDF score of{" "}
          <b>
            Log<sub>10</sub> (10^6/500000) = 0.30.
          </b>
          <br />
          <br />
          <ZoomImage src={table6} alt="table6" />
          <br />
          Additionally, as the image above illustrates, IDF has given the phrase
          <b>"smart"</b> which appears the most frequently, the lowest weight.
          The <b>square root of the total squared values</b> of all the vector's
          attributes is used to determine how long these vectors are:
          <br />
          <br />
          <ZoomImage src={table7} alt="table7" />
          <br />
          Let's normalise the vectors after determining the vector lengths and
          TF-IDF weights.
          <br />
          <br />
          <ZoomImage src={table8} alt="table8" />
          <br />
          To obtain the normalised vector, each term vector is divided by the
          document vector length. Thus, the normalised vector for the phrase
          <b>"Analytics"</b> in Article 1 is{" "}
          <b>
            <i>
              <u>2.322/3.800</u>
            </i>
          </b>
          . Likewise, every term inside the document has been normalised, and as
          the graphic above illustrates, every document vector now has a length
          of 1.
          <br />
          <br />
          After obtaining the normalised vectors, let's compute the cosine
          values to determine how similar the articles are to one another. We
          will only use three articles and three attributes for this purpose.
          <br />
          <br />
          <ZoomImage src={table9} alt="table9" />
          <br />
          <br />
          Cos(A1,A2) is simply the sum of dot product of normalized term vectors
          from both the articles. The calculation is as follows:
        </p>
        <p className="p-7 rounded-xl bg-[#edecec] dark:bg-[#374151] lg:mt-6 mt-6 lg:max-w-4xl text-sm lg:text-base leading-7 font-mono">
          Cos(A1,A2) = 0.611*0.59 + 0.63 * 0.69 + 0* 0.32 = =.7965
        </p>

        <p className="lg:mt-6 mt-6 lg:max-w-4xl lg:text-lg leading-7">
          As you can see, the articles 1 and 2 rank highest in search results
          since they are the most comparable to each other. Furthermore, as you
          recall, we stated that Article 1 (M1) is mostly about analytics rather
          than cloud computing. After length normalisation, analytics has a
          weight of 0.611 whereas cloud computing has 0.
        </p>
        <br />
        <br />

        <h1
          id="creating-binary-representation"
          className="group lg:mt-10 text-2xl font-bold lg:text-3xl text-[#23272F] dark:text-[#F6F7F9] flex items-center"
        >
          <a
            className="flex items-center"
            href="#creating-binary-representation"
          >
            Creating Binary Representation
            <RxDrawingPinFilled className="ml-2 text-2xl lg:text-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </h1>

        <p className="lg:mt-6 mt-6 lg:max-w-4xl lg:text-lg leading-7">
          <ZoomImage src={table10} alt="table10" />
          <br />
          <br />
          This picture is an example of movie recommender system called{" "}
          <Link to="https://movielens.org/" target="_blank">
            <b>
              <u>movielens</u>
            </b>
          </Link>
          . <b>This is a movie recommendation site</b> which recommends movies
          you should watch based on which movies you have rated and how much you
          have rated them.
          <br />
          <br />
          In its most basic form, the system takes in my inputs and creates a
          profile against the characteristics containing my likes and dislikes
          (which may be based on certain phrases or movie tags that I have liked
          or haven't done anything about).
          <br />
          <br />
          I've enjoyed <b>52 movies</b> across various genres. The fact that
          these films can be used to ascertain a user's taste makes them
          characteristics. The top six films that movie-lens has recommended are
          listed below. The user-recommended movie likes and dislikes are
          indicated in the user columns. The 1/0 just indicates whether or not
          there is adventure, action, etc. in the film. A{" "}
          <b>binary representation of attributes</b> is the name given to this
          kind of representation.
          <br />
          <br />
          <ZoomImage src={table11} alt="table11" />
          <br />
          <br />
          In the above example, user 1 has liked Star Wars whereas user 2 has
          not. Based on these types of inputs a user profile is generated.
          <br />
          <br />A basic 1 / 0 representation and count data are two more metrics
          that are employed. The measurement is dependent on the usage
          situation. For a <b>typical movie recommender system</b>, for
          instance, a <b>count representation</b> would be more appropriate for
          a search query on Google, while a simple binary format is more
          beneficial for other applications.
          <br />
        </p>
        <br />
        <br />
        <br />
        <h1
          id="building-a-content-based-recommender-for-analytics-vidhya-av"
          className="group lg:mt-10 text-2xl font-bold lg:text-3xl text-[#23272F] dark:text-[#F6F7F9] flex items-center"
        >
          <a
            className="flex items-center"
            href="#building-a-content-based-recommender-for-analytics-vidhya-av"
          >
            Building a Content Based Recommender for Analytics Vidhya (AV)
            <RxDrawingPinFilled className="ml-2 text-2xl lg:text-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </h1>
        <p className="lg:mt-6 mt-6 lg:max-w-4xl lg:text-lg leading-7">
          Now that we are familiar with all of these ideas, let's attempt to
          create a basic content recommender for AV based on user preferences.
          On AV, numerous articles have been written. Every post that is
          published targets a certain audience, thus while some readers may be
          interested in reading about machine learning methods, others may
          prefer R to machine learning. Therefore, a recommender system would be
          beneficial.
          <br />
          <br />
          To construct the recommendation system:
        </p>
        <br />

        <p className="text-lg font-bold lg:text-xl text-[#23272F] dark:text-[#F6F7F9]">
          Step 1: Tracking User Engagement
        </p>

        <p className="lg:mt-6 mt-6 lg:max-w-4xl lg:text-lg leading-7">
          We will monitor user involvement (likes, shares, and comments) with
          different articles for every user once a week. Let's examine how to
          accomplish that:
          <br />
          <br />
          <ZoomImage src={table12} alt="table12" />
          <br />
          Here, we have implemented binary representation. The picture
          above illustrates how big data, Python, and learning paths are
          discussed in Article 1. Article 2 also discusses R, Python, and
          machine learning. User 1 posted article 1 on social media because they
          loved it, but item 2 did not appeal to them. Other than reading
          articles 3, 4, and 5, he or she has not engaged with them.
        </p>
        <br />
        <br />
        <p className="text-lg font-bold lg:text-xl text-[#23272F] dark:text-[#F6F7F9]">
          Step 2: Normalize
        </p>

        <p className="lg:mt-6 mt-6 lg:max-w-4xl lg:text-lg leading-7">
          To establish binary representation, divide the term occurrence(1/0) by
          the sqrt of the article's attribute count. For Article 1, this means
          that <b>normalised attribute = 1/sqrt(3) = 0.577.</b>
          <br />
          <br />
          You need to find out what became of TF in this situation. and why,
          prior to determining the TF scores, we perform normalisation straight
          away? Without normalisation, the TF scores for occurring
          characteristics are{" "}
          <b>
            1+log <sub>10</sub> 1 = 1
          </b>
          , while for non-occurring attributes, they are just 0. The TF scores
          will likewise become 1/0 as a result.
        </p>
        <br />
        <br />
        <p className="text-lg font-bold lg:text-xl text-[#23272F] dark:text-[#F6F7F9]">
          Step 3: User Profile
        </p>

        <p className="lg:mt-6 mt-6 lg:max-w-4xl lg:text-lg leading-7">
          Let's see how Excel's "sumproduct" function is used to create the user
          profiles.
          <br />
          <br />
          <ZoomImage src={table13} alt="table13" />
          <br />
          Every user attribute value (highlighted portion of User 2) is
          multiplied by each attribute column (see the above highlighted
          learning paths columns). All that's here is the dot product of the
          vectors we previously saw. This provides a user's taste to a user
          profile (as displayed in the User Profiles section above).
          <br />
          <br />
          With the highest score of 1.28, user 1 is the one who enjoys reading
          articles on big data the most, followed by learning routes and machine
          learning. Likewise, user 2 prefers reading material about machine
          learning.
          <br />
          <br />
          Now that we have the article and user profile vectors, let's use these
          to determine which articles will be most suited to the user's
          preferences.
          <br />
          <br />
          <ZoomImage src={table14} alt="table14" />
        </p>
        <br />
        <div className="flex flex-col p-7 rounded-xl bg-[#ccf8ec] dark:bg-[#26353A] lg:mt-6 mt-6 lg:max-w-4xl text-sm lg:text-base leading-7">
          <p className="mb-5 font-bold flex">
            <GrNotes className="text-2xl mr-4" />
            <span className="lg:text-xl text-lg">Note</span>
          </p>
          <p>
            The <b>SUMPRODUCT</b> function in the image above contains some
            vectors which are highlighted in the image. <b>B36:F36</b> is the
            article 6 vector.
          </p>
        </div>
        <br />
        <p className="lg:mt-6 mt-6 lg:max-w-4xl lg:text-lg leading-7">
          The <b>weighted scores</b> for each article are obtained by taking the
          dot product of the article vectors and the IDF vectors. Once more, a
          dot product with the user profile vector (user 1 in this case) is
          created using these weighted scores. This indicates the probability
          that a specific article will be liked by the user. The probability for
          article 1 is 75%.
          <br />
          <br />
          We can determine which of the "n" items a user will find most
          appealing by applying this approach to them. As a result, a user may
          receive a personalised recommendation in addition to fresh articles
          every week based on the articles he hasn't yet read.
        </p>
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
          Two methods for content-based recommenders have been demonstrated.
          Though in distinct ways, they both make use of the vector space model
          implementations and the TF-IDF weighting. Consequently, the binary
          representation helped us grasp how to calculate the scores for data
          expressed as 1/0 and we also observed how user profiles are formed and
          predictions are made based on that, while the count data helped us
          comprehend the approach of computing the weighted ratings of articles.
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
            {showQuiz && <Quiz5 onClose={handleCloseQuiz} />}
          </div>
        </div>

        {/* Navigations */}

        <div className="lg:flex lg:justify-between my-24 lg:mx-22 lg:text-lg text-sm">
          <div className="hover:bg-[#E2E2E2] dark:hover:bg-[#343A46] p-5 rounded-xl lg:text-left">
            <Link to={"/learn/item-based-filtering"}>
              <p className="pl-10">PREVIOUS</p>
              <span className="flex justify-start">
                <IoIosArrowBack />
              </span>
              <p className="text-[#0A7EA3] dark:text-[#58C4DC] pl-10">
                Item-based Filtering
              </p>
            </Link>
          </div>

          <div className="hover:bg-[#E2E2E2] dark:hover:bg-[#343A46] p-5 rounded-xl lg:mr-20 text-right">
            <Link to={"/learn/session-based-recommender-systems"}>
              <p className="pr-10">NEXT</p>
              <span className="flex justify-end">
                <IoIosArrowForward />
              </span>
              <p className="text-[#0A7EA3] dark:text-[#58C4DC] pr-10">
                Session-based Recommender Systems
              </p>
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
};
