import CardScroller from "../CardScroller/CardScroller";
import CategoryCard from "../CategoryCard/CategoryCard";
function CategorySelectionPage() {
  return (
    <div className="content-center relative h-screen bg-background">
      <div className="h-[10hv] absolute top-0">
        <h1 className="text-9xl font-primary w-screen text-center pt-20 text-[rgb(35,89,119)]">
          Chose a category!
        </h1>
      </div>
      <div className="h-[80hv] absolute bottom-5">
        <CardScroller>
          <CategoryCard categoryType="category1" />
          <CategoryCard categoryType="category2" />
          <CategoryCard categoryType="category3" />
          <CategoryCard categoryType="category3" />
          <CategoryCard categoryType="category3" />
          <CategoryCard categoryType="category3" />
          <CategoryCard categoryType="category3" />
          <CategoryCard categoryType="category3" />
          <CategoryCard categoryType="category3" />
          <CategoryCard categoryType="category3" />
          <CategoryCard categoryType="category3" />
          <CategoryCard categoryType="category3" />
          <CategoryCard categoryType="category3" />
          <CategoryCard categoryType="category3" />
          <CategoryCard categoryType="category3" />
          <CategoryCard categoryType="category3" />
          <CategoryCard categoryType="category4" />
          <CategoryCard categoryType="category5" />
        </CardScroller>
      </div>
    </div>
  );
}

export default CategorySelectionPage;
