import Navbar from '@/components/navbar/Navbar';
import Sidebar from '@/components/sideBar/Sidebar';
import SkillTest from '@/components/skillsTest/SkillTest';

const SkillTestPage = () => {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar />

        <main className="flex-1 py-8 bg-white ">
          <SkillTest />
        </main>
      </div>
    </div>
  );
};

export default SkillTestPage;
