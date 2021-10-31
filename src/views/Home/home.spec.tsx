import { render, cleanup, screen } from "@testing-library/react";
import Home from "./index";




afterEach(cleanup);
render(
    <Home />
);

describe("Completely render <Home />", () => {
    test("render the Home component without crashing", () => {
        expect(screen.getAllByTestId("wrapper")).toHaveLength(1)
    });
});
