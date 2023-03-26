import "./CategoryCard.css";

function CategoryCard(props) {
  const categoryType = props.categoryType;

  return (
    <div
      className="w-[20rem] h-[30rem] relative card"
      onClick={() => {
        loadCategoryData(categoryType);
        // addHideClass();
      }}
    >
      <p className="text-4xl font-medium font-primary absolute bottom-2 w-[20rem] text-center">
        {categoryType}
      </p>
    </div>
  );
}

function loadCategoryData(category) {
    console.log('category :>> ', category);
  // TODO: Add a fetching support
}


// FIXME: DOES NOT WORK
function addHideClass() {
  const card = document.getElementById("card__scroller-container");
  card.dataset.mouseDownAt = "0";
  card.dataset.prevPercentage = "0";
  card.classList.add("hiding");
}
export default CategoryCard;
