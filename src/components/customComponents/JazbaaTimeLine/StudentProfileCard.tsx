import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Linkedin } from 'lucide-react';


interface StudentProfileCardProps {
  linkedinUrl: string;
  studentName: string;
  role: string;
  companyLogoUrl: string;
}

const StudentProfileCard: React.FC<StudentProfileCardProps> = ({
  linkedinUrl,
  studentName,
  role,
  companyLogoUrl,
}) => {
  return (
    <Card className="bg-white p-2 sm:p-3 md:p-4 flex gap-2 sm:gap-3 md:gap-4 w-full h-auto sm:h-24 relative">
      {/* Left side - Student Image */}
      <div className="flex-shrink-0">
        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full overflow-hidden bg-gray-100">
          <img
            src={linkedinUrl} // Dynamic LinkedIn URL from props
            alt={`Profile of ${studentName}`} // Dynamic alt text - more accessible
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Right side content */}
      <div className="flex-grow flex flex-col justify-between">
        {/* Top row with name */}
        <div className="flex justify-between items-start">
          <h3 className="text-xs sm:text-sm font-semibold text-[#ff0000] truncate max-w-[150px] sm:max-w-[200px]">
            {studentName} {/* Dynamic Student Name from props */}
          </h3>
        </div>

        {/* Company section */}
        <div className="flex flex-col">
          <p className="text-[8px] sm:text-[9px] p-[2px] text-black font-semibold line-clamp-2">
            {role} {/* Dynamic Role from props */}
          </p>
          <div className="h-4 sm:h-5 w-12 sm:w-16 mb-1">
            <img
              src={companyLogoUrl} // Dynamic Company Logo URL from props
              alt={`Logo of ${companyLogoUrl}`} // Consider making company name prop for better alt text
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* Badge - now a clickable link to LinkedIn Profile */}
      <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="absolute top-0.5 right-0.5">
        <Badge
          variant="outline"
          className="flex items-center gap-1 hover:bg-blue-50 cursor-pointer text-[8px] sm:text-xs"
        >
          <Linkedin className="w-2 h-2" />
        </Badge>
      </a>
    </Card>
  );
};

export default StudentProfileCard;