import Timeline from "../components/Timeline/Timeline";
import { loadOperations } from "../redux/operations/actions";
import { useEffect } from "react";
import { RootStateOrAny, useSelector, useDispatch } from "react-redux";

const TimelinePage: React.FC<any> = (props) => {
  const accountId = props.match.params.accountId;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadOperations(accountId));
  }, [accountId, dispatch]);
  const operations = useSelector((state: RootStateOrAny) => state.operations);

  return <Timeline items={operations} />;
};

export default TimelinePage;
