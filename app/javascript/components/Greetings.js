import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGreetings } from "../redux/greetingsSlice";

const Greeting = () => {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greeting.greetingsList) || [];

  useEffect(() => {
    dispatch(getGreetings());
  }, [dispatch]);

  return (
    <>
      <h1>Your Greeting: {greeting}</h1>
    </>
  );
};

export default Greeting;