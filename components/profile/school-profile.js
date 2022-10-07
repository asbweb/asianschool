import DownloadButton from "../buttons/download-button";

export default function SchoolProfile() {
  return (
    <>
      <h3 className="text-center text-uppercase my-3">
        The ASIAN School Bahrain
      </h3>
      <p>
        The Asian School is a privately owned secular co-educational institution
        officially opened on the 11th of May 1983 with the approval of the
        Ministry of Education, Kingdom of Bahrain. The institution was upgraded
        to the Secondary level in July 1992 and Senior Secondary level in
        December 2016. The school is affiliated to the Central Board of
        Secondary Education (CBSE), New Delhi and has a strength of around 4500
        students from Kindergarten to Grade 12. <br />
        The school is located in a sprawling 10.75 acre campus at Tubli. The
        school building has a built up area of 16,000 sqm. with 133 classrooms.
        The school is also home to the 2000 sqm. multi-purpose Dr. Abdul Kalam
        Memorial Auditorium, one of the biggest in the Kingdom of Bahrain. The
        school also has a regulation size football ground and a basketball and
        tennis court built to international standards.
        <br />
        The school has sent more than 20 batches of students to the All India
        Secondary School Certificate Examination conducted by the CBSE and all
        the batches have graduated with excellent results.
      </p>
      <DownloadButton btnicon="material-symbols:download-rounded">
        Download detailed profile (PDF)
      </DownloadButton>
    </>
  );
}
