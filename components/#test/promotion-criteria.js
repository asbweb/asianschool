import PromotionCriteriaList from "@data/curriculum/promotion-criteria.json";

export default function PromotionCriteria() {
  return (
    <>
      <h4 className="fw-bold mt-5 mb-3">
        {PromotionCriteriaList.criteria.title}
      </h4>
      <ul>
        {PromotionCriteriaList.criteria.text.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h4 className="fw-bold mt-5 mb-3">
        {PromotionCriteriaList.exceptions.title}
      </h4>

      <ol>
        {PromotionCriteriaList.exceptions.items.map((item, index) => {
          if (!item.children)
            return (
              <li key={index} className="mt-2">
                {item.text}
              </li>
            );
          {
            return (
              <>
                <li key={index} className="mb-1">{item.text}</li>
                <ol type="a">
                  {item.children.map((item, index) => (
                    <li key={index} className="mb-1">{item}</li>
                  ))}
                </ol>
              </>
            );
          }
        })}
      </ol>
    </>
  );
}
