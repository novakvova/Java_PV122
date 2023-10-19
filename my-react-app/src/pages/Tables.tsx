import Breadcrumb from '../components/admin/Breadcrumb.tsx';
import TableOne from '../components/admin/TableOne.tsx';
import TableThree from '../components/admin/TableThree.tsx';
import TableTwo from '../components/admin/TableTwo.tsx';

const Tables = () => {
  return (
    <>
      <Breadcrumb pageName="Tables" />

      <div className="flex flex-col gap-10">
        <TableOne />
        <TableTwo />
        <TableThree />
      </div>
    </>
  );
};

export default Tables;
