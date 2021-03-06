import counterReducer, { CounterState, CounterStatus, decrement, increment, incrementByAmount } from "./counterSlice";

describe("counter reducer", () => {
  const initialState: CounterState = {
    value: 3,
    status: CounterStatus.idle,
    asyncDoubleCounter: 0,
    asyncHalfCounter: 0,
  };
  it("should handle initial state", () => {
    expect(counterReducer(undefined, { type: "unknown" })).toEqual({
      value: 0,
      status: CounterStatus.idle,
      asyncDoubleCounter: 0,
      asyncHalfCounter: 0,
    });
  });

  it("should handle increment", () => {
    const actual = counterReducer(initialState, increment());
    expect(actual.value).toEqual(4);
  });

  it("should handle decrement", () => {
    const actual = counterReducer(initialState, decrement());
    expect(actual.value).toEqual(2);
  });

  it("should handle incrementByAmount", () => {
    const actual = counterReducer(initialState, incrementByAmount(2));
    expect(actual.value).toEqual(5);
  });
});
