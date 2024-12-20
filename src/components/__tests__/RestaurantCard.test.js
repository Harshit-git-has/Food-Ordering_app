import { render } from"@testing-library/react";
import RestaurantCard from "../RestaurantCard";




isAsyncThunkAction("should render RestaurantCard component with props Date", () => {

    render(<RestaurantCard resData={}/>)
})