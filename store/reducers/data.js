import * as types from "./../types/consts";

const initialState = {
  data: 
  [
    {
      "tags": [
        "javascript",
        "modal-dialog",
        "redux",
        "react-redux"
      ],
      "owner": {
        "reputation": 1164,
        "user_id": 1344154,
        "user_type": "registered",
        "accept_rate": 83,
        "profile_image": "https://i.stack.imgur.com/ZtIht.jpg?s=128&g=1",
        "display_name": "carlesba",
        "link": "https://stackoverflow.com/users/1344154/carlesba"
      },
      "is_answered": true,
      "view_count": 67379,
      "accepted_answer_id": 35641680,
      "answer_count": 3,
      "score": 178,
      "last_activity_date": 1525815866,
      "creation_date": 1456393634,
      "last_edit_date": 1456449861,
      "question_id": 35623656,
      "link": "https://stackoverflow.com/questions/35623656/how-can-i-display-a-modal-dialog-in-redux-that-performs-asynchronous-actions",
      "title": "How can I display a modal dialog in Redux that performs asynchronous actions?"
    },
    {
      "tags": [
        "javascript",
        "redux",
        "react-redux"
      ],
      "owner": {
        "reputation": 1775,
        "user_id": 2665008,
        "user_type": "registered",
        "accept_rate": 0,
        "profile_image": "https://graph.facebook.com/536072548/picture?type=large",
        "display_name": "Pablo Barr&#237;a Urenda",
        "link": "https://stackoverflow.com/users/2665008/pablo-barr%c3%ada-urenda"
      },
      "is_answered": true,
      "view_count": 89109,
      "accepted_answer_id": 46429416,
      "answer_count": 6,
      "score": 133,
      "last_activity_date": 1524606482,
      "creation_date": 1467718961,
      "last_edit_date": 1487247261,
      "question_id": 38202572,
      "link": "https://stackoverflow.com/questions/38202572/understanding-react-redux-and-mapstatetoprops",
      "title": "Understanding React-Redux and mapStateToProps"
    },
    {
      "tags": [
        "reactjs",
        "redux",
        "react-redux"
      ],
      "owner": {
        "reputation": 741,
        "user_id": 6608914,
        "user_type": "registered",
        "profile_image": "https://lh4.googleusercontent.com/-Y_dDgG2xLww/AAAAAAAAAAI/AAAAAAAAAIk/pFXeA6BELNE/photo.jpg?sz=128",
        "display_name": "Subodh Pareek",
        "link": "https://stackoverflow.com/users/6608914/subodh-pareek"
      },
      "is_answered": true,
      "view_count": 48145,
      "answer_count": 7,
      "score": 100,
      "last_activity_date": 1533290199,
      "creation_date": 1468937395,
      "question_id": 38460949,
      "link": "https://stackoverflow.com/questions/38460949/what-is-the-best-way-to-access-redux-store-outside-a-react-component",
      "title": "What is the best way to access redux store outside a react component?"
    },
    {
      "tags": [
        "javascript",
        "reactjs",
        "redux",
        "react-redux"
      ],
      "owner": {
        "reputation": 513,
        "user_id": 7557079,
        "user_type": "registered",
        "accept_rate": 25,
        "profile_image": "https://i.stack.imgur.com/aDNFE.jpg?s=128&g=1",
        "display_name": "Alfrex92",
        "link": "https://stackoverflow.com/users/7557079/alfrex92"
      },
      "is_answered": true,
      "view_count": 14670,
      "accepted_answer_id": 49569183,
      "answer_count": 4,
      "score": 67,
      "last_activity_date": 1532626943,
      "creation_date": 1522381346,
      "last_edit_date": 1528819611,
      "question_id": 49568073,
      "link": "https://stackoverflow.com/questions/49568073/react-context-vs-react-redux-when-should-i-use-each-one",
      "title": "React Context vs React Redux, when should I use each one?"
    },
    {
      "tags": [
        "react-native",
        "react-redux"
      ],
      "owner": {
        "reputation": 656,
        "user_id": 6847435,
        "user_type": "registered",
        "accept_rate": 100,
        "profile_image": "https://www.gravatar.com/avatar/39a5b9ee270763eb839fcd96fd8f25db?s=128&d=identicon&r=PG&f=1",
        "display_name": "coderzzz18",
        "link": "https://stackoverflow.com/users/6847435/coderzzz18"
      },
      "is_answered": true,
      "view_count": 49320,
      "accepted_answer_id": 40925668,
      "answer_count": 3,
      "score": 62,
      "last_activity_date": 1521328635,
      "creation_date": 1480596822,
      "last_edit_date": 1480642827,
      "question_id": 40911194,
      "link": "https://stackoverflow.com/questions/40911194/how-do-i-add-an-element-to-array-in-reducer-of-react-native-redux",
      "title": "How do I add an element to array in reducer of React native redux?"
    },
    {
      "tags": [
        "javascript",
        "reactjs",
        "redux",
        "react-redux"
      ],
      "owner": {
        "reputation": 390,
        "user_id": 3349001,
        "user_type": "registered",
        "profile_image": "https://i.stack.imgur.com/BuPC5.jpg?s=128&g=1",
        "display_name": "sully",
        "link": "https://stackoverflow.com/users/3349001/sully"
      },
      "is_answered": true,
      "view_count": 52794,
      "accepted_answer_id": 35443320,
      "answer_count": 6,
      "score": 55,
      "last_activity_date": 1518787281,
      "creation_date": 1455657452,
      "last_edit_date": 1488928669,
      "question_id": 35443167,
      "link": "https://stackoverflow.com/questions/35443167/dispatch-is-not-a-function-when-argument-to-maptodispatchtoprops-in-redux",
      "title": "&#39;dispatch&#39; is not a function when argument to mapToDispatchToProps() in Redux"
    },
    {
      "tags": [
        "reactjs",
        "react-native",
        "redux",
        "react-redux"
      ],
      "owner": {
        "reputation": 3069,
        "user_id": 279906,
        "user_type": "registered",
        "accept_rate": 79,
        "profile_image": "https://www.gravatar.com/avatar/cb0a407b43659f4502f93b819b8b9179?s=128&d=identicon&r=PG",
        "display_name": "Michael",
        "link": "https://stackoverflow.com/users/279906/michael"
      },
      "is_answered": true,
      "view_count": 26887,
      "accepted_answer_id": 37786323,
      "answer_count": 4,
      "score": 52,
      "last_activity_date": 1527253888,
      "creation_date": 1465759049,
      "last_edit_date": 1465769074,
      "question_id": 37778153,
      "link": "https://stackoverflow.com/questions/37778153/passing-props-to-react-redux-container-component",
      "title": "Passing props to react-redux container component"
    },
    {
      "tags": [
        "javascript",
        "reactjs",
        "redux",
        "react-redux",
        "redux-saga"
      ],
      "owner": {
        "reputation": 3889,
        "user_id": 1203115,
        "user_type": "registered",
        "accept_rate": 83,
        "profile_image": "https://www.gravatar.com/avatar/04b64a97a9626c08bd92755e25c3f5fe?s=128&d=identicon&r=PG",
        "display_name": "Adam Tal",
        "link": "https://stackoverflow.com/users/1203115/adam-tal"
      },
      "is_answered": true,
      "view_count": 19268,
      "accepted_answer_id": 37779468,
      "answer_count": 2,
      "score": 44,
      "last_activity_date": 1496547635,
      "creation_date": 1465725193,
      "question_id": 37772877,
      "link": "https://stackoverflow.com/questions/37772877/how-to-get-something-from-the-state-store-inside-a-redux-saga-function",
      "title": "How to get something from the state / store inside a redux-saga function?"
    },
    {
      "tags": [
        "reactjs",
        "redux",
        "react-redux"
      ],
      "owner": {
        "reputation": 221,
        "user_id": 5738746,
        "user_type": "registered",
        "profile_image": "https://i.stack.imgur.com/28YxY.png?s=128&g=1",
        "display_name": "d.code",
        "link": "https://stackoverflow.com/users/5738746/d-code"
      },
      "is_answered": true,
      "view_count": 20448,
      "answer_count": 4,
      "score": 44,
      "last_activity_date": 1517858624,
      "creation_date": 1484874710,
      "last_edit_date": 1510934947,
      "question_id": 41754489,
      "link": "https://stackoverflow.com/questions/41754489/when-would-bindactioncreators-be-used-in-react-redux",
      "title": "When would bindActionCreators be used in react/redux?"
    },
    {
      "tags": [
        "redux",
        "react-redux"
      ],
      "owner": {
        "reputation": 3048,
        "user_id": 3946931,
        "user_type": "registered",
        "accept_rate": 76,
        "profile_image": "https://www.gravatar.com/avatar/a45b621c0a6b96ea0996dfd51867c541?s=128&d=identicon&r=PG&f=1",
        "display_name": "therewillbecode",
        "link": "https://stackoverflow.com/users/3946931/therewillbecode"
      },
      "is_answered": true,
      "view_count": 24743,
      "accepted_answer_id": 41199333,
      "answer_count": 2,
      "score": 42,
      "last_activity_date": 1527217360,
      "creation_date": 1481979668,
      "last_edit_date": 1482057614,
      "question_id": 41198842,
      "link": "https://stackoverflow.com/questions/41198842/what-is-the-use-of-the-ownprops-arg-in-mapstatetoprops-and-mapdispatchtoprops",
      "title": "What is the use of the ownProps arg in mapStateToProps and mapDispatchToProps?"
    },
    {
      "tags": [
        "react-router",
        "redux",
        "react-redux",
        "redux-framework",
        "react-router-redux"
      ],
      "owner": {
        "reputation": 251,
        "user_id": 1970111,
        "user_type": "registered",
        "accept_rate": 0,
        "profile_image": "https://www.gravatar.com/avatar/726e030bbc23116be95b7943dac678fd?s=128&d=identicon&r=PG",
        "display_name": "Anton",
        "link": "https://stackoverflow.com/users/1970111/anton"
      },
      "is_answered": true,
      "view_count": 22646,
      "answer_count": 5,
      "score": 42,
      "last_activity_date": 1516714810,
      "creation_date": 1460546945,
      "question_id": 36596996,
      "link": "https://stackoverflow.com/questions/36596996/how-to-sync-redux-state-and-url-query-params",
      "title": "How to sync Redux state and url query params"
    },
    {
      "tags": [
        "reactjs",
        "react-redux"
      ],
      "owner": {
        "reputation": 3665,
        "user_id": 1953504,
        "user_type": "registered",
        "accept_rate": 66,
        "profile_image": "https://i.stack.imgur.com/0zBN2.jpg?s=128&g=1",
        "display_name": "Salman",
        "link": "https://stackoverflow.com/users/1953504/salman"
      },
      "is_answered": true,
      "view_count": 19960,
      "accepted_answer_id": 40082887,
      "answer_count": 1,
      "score": 39,
      "last_activity_date": 1476696763,
      "creation_date": 1476695547,
      "last_edit_date": 1476696532,
      "question_id": 40082477,
      "link": "https://stackoverflow.com/questions/40082477/module-not-found-redux",
      "title": "Module not found: &#39;redux&#39;"
    },
    {
      "tags": [
        "javascript",
        "reactjs",
        "redux",
        "react-redux"
      ],
      "owner": {
        "reputation": 17394,
        "user_id": 1544590,
        "user_type": "registered",
        "accept_rate": 76,
        "profile_image": "https://www.gravatar.com/avatar/cdb57618cf028c2a58191b7396a1fbe0?s=128&d=identicon&r=PG",
        "display_name": "Daiwei",
        "link": "https://stackoverflow.com/users/1544590/daiwei"
      },
      "is_answered": true,
      "view_count": 8133,
      "accepted_answer_id": 37266130,
      "answer_count": 1,
      "score": 38,
      "last_activity_date": 1471849926,
      "creation_date": 1463438665,
      "last_edit_date": 1471849926,
      "question_id": 37264415,
      "link": "https://stackoverflow.com/questions/37264415/how-to-optimize-small-updates-to-props-of-nested-component-in-react-redux",
      "title": "How to optimize small updates to props of nested component in React + Redux?"
    },
    {
      "tags": [
        "javascript",
        "asynchronous",
        "reactjs",
        "redux",
        "react-redux"
      ],
      "owner": {
        "reputation": 435,
        "user_id": 3092338,
        "user_type": "registered",
        "accept_rate": 57,
        "profile_image": "https://www.gravatar.com/avatar/1fa580c76c64e49510df2b4e934b3661?s=128&d=identicon&r=PG&f=1",
        "display_name": "Parkicism",
        "link": "https://stackoverflow.com/users/3092338/parkicism"
      },
      "is_answered": true,
      "view_count": 66101,
      "accepted_answer_id": 38333353,
      "answer_count": 4,
      "score": 37,
      "last_activity_date": 1525755355,
      "creation_date": 1468336649,
      "last_edit_date": 1488709928,
      "question_id": 38332912,
      "link": "https://stackoverflow.com/questions/38332912/how-do-i-access-store-state-in-react-redux",
      "title": "How do I access store state in React Redux?"
    },
    {
      "tags": [
        "javascript",
        "reactjs",
        "redux",
        "react-redux"
      ],
      "owner": {
        "reputation": 1760,
        "user_id": 220474,
        "user_type": "registered",
        "accept_rate": 75,
        "profile_image": "https://www.gravatar.com/avatar/84ca6ab783cbfe76132cfc1a84cbeca9?s=128&d=identicon&r=PG",
        "display_name": "Eugene",
        "link": "https://stackoverflow.com/users/220474/eugene"
      },
      "is_answered": true,
      "view_count": 16183,
      "accepted_answer_id": 36784284,
      "answer_count": 2,
      "score": 37,
      "last_activity_date": 1461295674,
      "creation_date": 1461294658,
      "question_id": 36784139,
      "link": "https://stackoverflow.com/questions/36784139/where-do-i-fetch-initial-data-from-server-in-a-react-redux-app",
      "title": "Where do I fetch initial data from server in a React Redux app?"
    },
    {
      "tags": [
        "javascript",
        "redux",
        "react-redux"
      ],
      "owner": {
        "reputation": 176,
        "user_id": 6203017,
        "user_type": "registered",
        "accept_rate": 20,
        "profile_image": "https://www.gravatar.com/avatar/0dbfa86094fd724a4fde248c2c26665b?s=128&d=identicon&r=PG&f=1",
        "display_name": "Ice Wilder",
        "link": "https://stackoverflow.com/users/6203017/ice-wilder"
      },
      "is_answered": true,
      "view_count": 19107,
      "accepted_answer_id": 36657621,
      "answer_count": 5,
      "score": 32,
      "last_activity_date": 1517353875,
      "creation_date": 1460626438,
      "last_edit_date": 1460758138,
      "question_id": 36619093,
      "link": "https://stackoverflow.com/questions/36619093/why-do-i-get-reducer-returned-undefined-during-initialization-despite-pr",
      "title": "Why do I get “Reducer [...] returned undefined during initialization” despite providing initialState to createStore()?"
    },
    {
      "tags": [
        "reactjs",
        "redux",
        "react-redux",
        "middleware",
        "redux-thunk"
      ],
      "owner": {
        "reputation": 679,
        "user_id": 6378530,
        "user_type": "registered",
        "accept_rate": 65,
        "profile_image": "https://www.gravatar.com/avatar/5325e39f6f9f2d12029b11d4f8e56a69?s=128&d=identicon&r=PG&f=1",
        "display_name": "doctopus",
        "link": "https://stackoverflow.com/users/6378530/doctopus"
      },
      "is_answered": true,
      "view_count": 13472,
      "accepted_answer_id": 43955223,
      "answer_count": 3,
      "score": 31,
      "last_activity_date": 1525597639,
      "creation_date": 1494691410,
      "question_id": 43955199,
      "link": "https://stackoverflow.com/questions/43955199/how-to-add-multiple-middleware-to-redux",
      "title": "How to add multiple middleware to Redux?"
    },
    {
      "tags": [
        "javascript",
        "reactjs",
        "redux",
        "eslint",
        "react-redux"
      ],
      "owner": {
        "reputation": 1511,
        "user_id": 3312117,
        "user_type": "registered",
        "accept_rate": 50,
        "profile_image": "https://i.stack.imgur.com/n2PUO.jpg?s=128&g=1",
        "display_name": "Kerumen",
        "link": "https://stackoverflow.com/users/3312117/kerumen"
      },
      "is_answered": true,
      "view_count": 4132,
      "accepted_answer_id": 42337137,
      "answer_count": 2,
      "score": 30,
      "last_activity_date": 1524249401,
      "creation_date": 1465311211,
      "last_edit_date": 1465376353,
      "question_id": 37682705,
      "link": "https://stackoverflow.com/questions/37682705/avoid-no-shadow-eslint-error-with-mapdispatchtoprops",
      "title": "Avoid no-shadow eslint error with mapDispatchToProps"
    },
    {
      "tags": [
        "javascript",
        "reactjs",
        "redux",
        "reactjs-flux",
        "react-redux"
      ],
      "owner": {
        "reputation": 192,
        "user_id": 3705620,
        "user_type": "registered",
        "accept_rate": 62,
        "profile_image": "https://i.stack.imgur.com/XtTfu.jpg?s=128&g=1",
        "display_name": "Chetan Motamarri",
        "link": "https://stackoverflow.com/users/3705620/chetan-motamarri"
      },
      "is_answered": true,
      "view_count": 10208,
      "accepted_answer_id": 38405713,
      "answer_count": 3,
      "score": 30,
      "last_activity_date": 1533465658,
      "creation_date": 1468620040,
      "question_id": 38405571,
      "link": "https://stackoverflow.com/questions/38405571/what-are-differences-between-redux-react-redux-redux-thunk",
      "title": "What are differences between redux, react-redux, redux-thunk?"
    },
    {
      "tags": [
        "redux",
        "react-redux"
      ],
      "owner": {
        "reputation": 3759,
        "user_id": 2485624,
        "user_type": "registered",
        "accept_rate": 89,
        "profile_image": "https://i.stack.imgur.com/dNes0.jpg?s=128&g=1",
        "display_name": "Harkirat Saluja",
        "link": "https://stackoverflow.com/users/2485624/harkirat-saluja"
      },
      "is_answered": true,
      "view_count": 12746,
      "accepted_answer_id": 41359312,
      "answer_count": 1,
      "score": 28,
      "last_activity_date": 1482919221,
      "creation_date": 1482912422,
      "question_id": 41357897,
      "link": "https://stackoverflow.com/questions/41357897/understanding-compose-functions-in-redux",
      "title": "Understanding compose functions in redux"
    },
    {
      "tags": [
        "reactjs",
        "redux",
        "react-redux"
      ],
      "owner": {
        "reputation": 5670,
        "user_id": 353217,
        "user_type": "registered",
        "accept_rate": 84,
        "profile_image": "https://www.gravatar.com/avatar/b6ed8fd20fb90b444f6579e92bf171c7?s=128&d=identicon&r=PG",
        "display_name": "Saad",
        "link": "https://stackoverflow.com/users/353217/saad"
      },
      "is_answered": true,
      "view_count": 32476,
      "protected_date": 1529981139,
      "accepted_answer_id": 37823191,
      "answer_count": 2,
      "score": 28,
      "last_activity_date": 1529982436,
      "creation_date": 1465943114,
      "last_edit_date": 1529982436,
      "question_id": 37823132,
      "link": "https://stackoverflow.com/questions/37823132/how-to-set-initial-state-in-redux",
      "title": "how to set initial state in redux"
    },
    {
      "tags": [
        "reactjs",
        "redux",
        "react-redux"
      ],
      "owner": {
        "reputation": 723,
        "user_id": 1100692,
        "user_type": "registered",
        "accept_rate": 80,
        "profile_image": "https://www.gravatar.com/avatar/62797d9f833fcf75c8621fc87665a828?s=128&d=identicon&r=PG",
        "display_name": "Joe Lewis",
        "link": "https://stackoverflow.com/users/1100692/joe-lewis"
      },
      "is_answered": true,
      "view_count": 7317,
      "accepted_answer_id": 40386189,
      "answer_count": 2,
      "score": 28,
      "last_activity_date": 1524794839,
      "creation_date": 1478107668,
      "last_edit_date": 1514575126,
      "question_id": 40386128,
      "link": "https://stackoverflow.com/questions/40386128/how-does-a-redux-connected-component-know-when-to-re-render",
      "title": "How does a redux connected component know when to re-render?"
    },
    {
      "tags": [
        "reactjs",
        "redux",
        "react-redux"
      ],
      "owner": {
        "reputation": 3342,
        "user_id": 728241,
        "user_type": "registered",
        "accept_rate": 71,
        "profile_image": "https://www.gravatar.com/avatar/6b74da9a3777793f2b48e20de23760bc?s=128&d=identicon&r=PG",
        "display_name": "David",
        "link": "https://stackoverflow.com/users/728241/david"
      },
      "is_answered": true,
      "view_count": 47056,
      "accepted_answer_id": 37009991,
      "answer_count": 4,
      "score": 28,
      "last_activity_date": 1532593215,
      "creation_date": 1462292426,
      "question_id": 37009328,
      "link": "https://stackoverflow.com/questions/37009328/rerender-react-component-when-prop-changes",
      "title": "rerender react component when prop changes"
    },
    {
      "tags": [
        "reactjs",
        "react-router",
        "higher-order-functions",
        "react-redux"
      ],
      "owner": {
        "reputation": 498,
        "user_id": 3050450,
        "user_type": "registered",
        "accept_rate": 73,
        "profile_image": "https://i.stack.imgur.com/eq9G6.jpg?s=128&g=1",
        "display_name": "Tabbyofjudah",
        "link": "https://stackoverflow.com/users/3050450/tabbyofjudah"
      },
      "is_answered": true,
      "view_count": 4631,
      "accepted_answer_id": 36970073,
      "answer_count": 2,
      "score": 27,
      "last_activity_date": 1505758692,
      "creation_date": 1462053151,
      "question_id": 36960675,
      "link": "https://stackoverflow.com/questions/36960675/difference-between-using-a-hoc-vs-component-wrapping",
      "title": "Difference between using a HOC vs. Component Wrapping"
    },
    {
      "tags": [
        "redux",
        "react-redux"
      ],
      "owner": {
        "reputation": 9519,
        "user_id": 337134,
        "user_type": "registered",
        "accept_rate": 79,
        "profile_image": "https://i.stack.imgur.com/W4Ucw.png?s=128&g=1",
        "display_name": "Knows Not Much",
        "link": "https://stackoverflow.com/users/337134/knows-not-much"
      },
      "is_answered": true,
      "view_count": 12904,
      "accepted_answer_id": 35836420,
      "answer_count": 4,
      "score": 26,
      "last_activity_date": 1520846315,
      "creation_date": 1457325732,
      "question_id": 35836290,
      "link": "https://stackoverflow.com/questions/35836290/access-state-inside-of-mapdispatchtoprops-method",
      "title": "Access State inside of mapDispatchToProps method"
    },
    {
      "tags": [
        "reactjs",
        "redux",
        "react-router",
        "react-redux"
      ],
      "owner": {
        "reputation": 472,
        "user_id": 819315,
        "user_type": "registered",
        "accept_rate": 67,
        "profile_image": "https://www.gravatar.com/avatar/3f98d6810be79ce375489efc4927539a?s=128&d=identicon&r=PG",
        "display_name": "Rein",
        "link": "https://stackoverflow.com/users/819315/rein"
      },
      "is_answered": true,
      "view_count": 14322,
      "answer_count": 8,
      "score": 26,
      "last_activity_date": 1528828042,
      "creation_date": 1492693730,
      "question_id": 43520498,
      "link": "https://stackoverflow.com/questions/43520498/react-router-private-routes-redirect-not-working",
      "title": "React router private routes / redirect not working"
    },
    {
      "tags": [
        "reactjs",
        "react-redux"
      ],
      "owner": {
        "reputation": 4205,
        "user_id": 37168,
        "user_type": "registered",
        "accept_rate": 69,
        "profile_image": "https://i.stack.imgur.com/6nAaY.png?s=128&g=1",
        "display_name": "stone",
        "link": "https://stackoverflow.com/users/37168/stone"
      },
      "is_answered": true,
      "view_count": 4033,
      "accepted_answer_id": 39755529,
      "answer_count": 6,
      "score": 26,
      "last_activity_date": 1512069202,
      "creation_date": 1469046785,
      "last_edit_date": 1469510254,
      "question_id": 38490335,
      "link": "https://stackoverflow.com/questions/38490335/can-react-redux-connect-ed-containers-implement-lifecyle-methods-like-compone",
      "title": "Can react-redux connect() -ed containers implement lifecyle methods like componentDidMount?"
    },
    {
      "tags": [
        "reactjs",
        "redux",
        "react-redux",
        "redux-form"
      ],
      "owner": {
        "reputation": 1001,
        "user_id": 1995281,
        "user_type": "registered",
        "accept_rate": 50,
        "profile_image": "https://www.gravatar.com/avatar/698d2867566864946d7b6304ae753a99?s=128&d=identicon&r=PG",
        "display_name": "J33nn",
        "link": "https://stackoverflow.com/users/1995281/j33nn"
      },
      "is_answered": true,
      "view_count": 14025,
      "accepted_answer_id": 41270121,
      "answer_count": 4,
      "score": 24,
      "last_activity_date": 1520366027,
      "creation_date": 1482336097,
      "question_id": 41267037,
      "link": "https://stackoverflow.com/questions/41267037/redux-form-initial-values-from",
      "title": "Redux-Form initial values from"
    },
    {
      "tags": [
        "reactjs",
        "local-storage",
        "redux",
        "react-router",
        "react-redux"
      ],
      "owner": {
        "reputation": 1093,
        "user_id": 3473770,
        "user_type": "registered",
        "accept_rate": 100,
        "profile_image": "https://graph.facebook.com/100002527541147/picture?type=large",
        "display_name": "modernator",
        "link": "https://stackoverflow.com/users/3473770/modernator"
      },
      "is_answered": true,
      "view_count": 13321,
      "accepted_answer_id": 39098876,
      "answer_count": 2,
      "score": 24,
      "last_activity_date": 1471987549,
      "creation_date": 1471944625,
      "last_edit_date": 1471964500,
      "question_id": 39097440,
      "link": "https://stackoverflow.com/questions/39097440/on-react-router-how-to-stay-logged-in-state-even-refresh-the-page",
      "title": "On React Router, how to stay logged in state even refresh the page?"
    },
    {
      "tags": [
        "javascript",
        "reactjs",
        "seo",
        "react-redux",
        "babeljs"
      ],
      "owner": {
        "reputation": 384,
        "user_id": 5185555,
        "user_type": "registered",
        "accept_rate": 33,
        "profile_image": "https://www.gravatar.com/avatar/9237fb9180c8e7d4364b800965593afa?s=128&d=identicon&r=PG&f=1",
        "display_name": "suyesh",
        "link": "https://stackoverflow.com/users/5185555/suyesh"
      },
      "is_answered": true,
      "view_count": 18068,
      "answer_count": 2,
      "score": 24,
      "last_activity_date": 1532346598,
      "creation_date": 1487647996,
      "last_edit_date": 1525961300,
      "question_id": 42358158,
      "link": "https://stackoverflow.com/questions/42358158/how-does-search-engine-indexing-work-for-javascript-web-applications-like-react",
      "title": "How does Search Engine indexing work for JavaScript web applications like REACT?"
    }
  ],
  pageNum: 0
};

const dataRed = (state = initialState, action) => {
  switch (action.type) {

    case types.ADD_DATA:
      const data = action.data || state.data;

      return {
        ...state,
        data
      };

    case types.SET_CURRENT_PAGE:
      const pageNum = action.pageNum;

      return {
        ...state,
        pageNum
      };

    default:
      return state;
  }
};

export default dataRed;