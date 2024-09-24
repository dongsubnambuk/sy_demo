// font awesome 아이콘을 라이브리에 추가하는 용도
// 아이콘을 사용하려면 사용할 컴퍼넌트에서 다시 import 해줘야 함

// 라이브러리 
import {library} from "@fortawesome/fontawesome-svg-core";

// 사용할 아이콘 import
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {faCartArrowDown} from "@fortawesome/free-solid-svg-icons";
import {faHouse} from "@fortawesome/free-solid-svg-icons";
import {faBowlFood} from "@fortawesome/free-solid-svg-icons";
import {faUser} from "@fortawesome/free-solid-svg-icons";

// 위의 아이콘들 라이브러리에 추가 
library.add(faBars,faCartArrowDown,faHouse,faBowlFood, faUser);
