import CardFour from '../../components/admin/CardFour.tsx';
import CardOne from '../../components/admin/CardOne.tsx';
import CardThree from '../../components/admin/CardThree.tsx';
import CardTwo from '../../components/admin/CardTwo.tsx';
import ChartOne from '../../components/admin/ChartOne.tsx';
import ChartThree from '../../components/admin/ChartThree.tsx';
import ChartTwo from '../../components/admin/ChartTwo.tsx';
import ChatCard from '../../components/admin/ChatCard.tsx';
import MapOne from '../../components/admin/MapOne.tsx';
import TableOne from '../../components/admin/TableOne.tsx';

const ECommerce = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardOne />
        <CardTwo />
        <CardThree />
        <CardFour />
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ChartOne />
        <ChartTwo />
        <ChartThree />
        <MapOne />
        <div className="col-span-12 xl:col-span-8">
          <TableOne />
        </div>
        <ChatCard />
      </div>
    </>
  );
};

export default ECommerce;
