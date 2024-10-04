import * as P from "../../styles/components/PaginationStyle";
import Left from "../../assets/arrowLeft.svg";
import Right from "../../assets/arrowRight.svg";
import { useEffect, useState } from "react";

const Pagination = ({ currentPage, totalPage, setPage }) => {
  const pageRange = 5; // 보여줄 페이지 개수
  const [start, setStart] = useState(1); // 시작 페이지
  const noPrev = start === 1; // 이전 페이지가 없는 경우
  const noNext = start + pageRange - 1 >= totalPage; // 다음 페이지가 없는 경우

  useEffect(() => {
    //보여줄 페이지 설정
    if (currentPage === start + pageRange) setStart((prev) => prev + pageRange);
    if (currentPage < start) setStart((prev) => prev - pageRange);
  }, [currentPage]);

  return (
    <P.Container>
      <P.ArrowBtn
        data-active={noPrev}
        onClick={() => !noPrev && setPage(start - 1)}
      >
        <img src={Left} alt="왼쪽" />
      </P.ArrowBtn>
      <P.Container style={{ gap: "10px" }}>
        {[...Array(pageRange)].map((_, i) => (
          <>
            {start + i <= totalPage && (
              <P.NumBtn
                key={i}
                onClick={() => setPage(start + i)}
                data-active={currentPage === start + i}
              >
                {start + i}
              </P.NumBtn>
            )}
          </>
        ))}
      </P.Container>
      <P.ArrowBtn
        data-active={noNext}
        onClick={() => !noNext && setPage(start + pageRange)}
      >
        <img src={Right} alt="오른쪽" />
      </P.ArrowBtn>
    </P.Container>
  );
};

export default Pagination;
