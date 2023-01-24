export default function PromotionCriteria() {
  return (
    <>
      <h4 className="fw-bold mt-5 mb-3">Promotion Criteria</h4>
      <ul>
        <li>Minimum attendance should be 75% of the total working days.</li>
        <li>
          Minimum 33% for Grades 6 to 11 (‘D’ grade) and 40% for LKG to Grade 5
          (‘D’ grade) in all subjects.
        </li>
        <li>Minimum 33% in all practicals for Grades 11 and 12.</li>
        {/* <li>
          Overall grade will not be given if a student is absent or has failed
          in any subject including co-scholastic subjects.
        </li> */}
        <li>
          It is compulsory for a student to appear for all examinations and
          tests. If a student fails to appear for the Half Yearly Examination
          (LKG to Grade 8) on genuine grounds and if the Principal is satisfied
          with the reasons, he/she may be allowed proportionate credit for the
          examination at the time of final assessment for promotion to the next
          higher grade.
        </li>
        <li>
          Students absenting themselves from any examination or test for medical
          reasons are required to submit a medical certificate along with a
          letter of absence.
        </li>
        <li>
          All subjects will be continuously assessed during the course of the
          academic year and graded according to performance. The tests will be
          Periodic and Examinations.
        </li>
        <li>
          A student who has not appeared in the Annual Examination is not
          eligible for promotion to the next higher grade, even if he/she
          secures sufficient marks in the earlier tests and examinations. But if
          the reason for absence is genuine, the Principal may arrange a
          re-examination for the student. Such re-examinations cannot be later
          than 31st May. There will be no re-examination for any Periodic tests
          or Half Yearly Examination for students of LKG to Grade 8.
        </li>
        <li>
          A student of Grade 8 will not be considered for promotion to Grade 9
          unless he/she secures a passing grade in the third language.
        </li>
        <li>
          Students using unfair means in any test/examination will be given ‘0’
          marks in that subject and it will be recorded as an act of misconduct.
          Any repetition of such acts will be taken up seriously.
        </li>
        <li>
          A student failing twice in the same grade has to be withdrawn from the
          school.
        </li>
        <li>
          The Central Board of Secondary Examination, Delhi conducts the All
          India Secondary School Examination at the end of Grade 10 and the All
          India Senior School Certificate Examination at the end of Grade 12.
          Candidates for these examinations must have a minimum of 75%
          attendance and a record of satisfactory academic performance for the
          continuous assessments in Grades 10 and 12. A student failing in the
          Grade 10 or Grade 12 Board Examination will not be allowed to continue
          in the same grade.
        </li>
          {/* <li>
            A student failing in the Grade 10 Board Examination will not be
            allowed to continue in the same grade.
          </li> */}
        <li>
          Indians who have acquired a Bahraini passport should inform the
          concerned school authorities about the same. Bahraini passport holders
          should opt for Arabic instead of Hindi for their II language.
        </li>
      </ul>

      <h4 className="mt-5 mb-3">Exceptions</h4>
      <ol>
        <li className="mb-2">
          In the case of an LKG to Grade 3 student securing ‘E’ grade (below
          40%)
          <ol type="a">
            <li>
              ) in one subject: If a student secures above 35% in that subject then
              promotion will be granted. If he/she secures below 35% then he/she
              will have to appear for a supplementary examination in that
              subject and secure at least 40% to get promoted.
            </li>
            <li>
              ) in more than one subject: The student will have to appear for a
              supplementary examination in those subjects and secure at least
              40% in each of those subjects to get promoted.
            </li>
          </ol>
        </li>
        <li> 
          A student of Grades 6 to 9 or 11 securing less than 33% (‘E’ grade) in
          one or two subjects will have to appear for a supplementary examination for
          the subject(s) and obtain a minimum of 33% (‘D’ grade) to get
          promoted. If he/she does not pass in the supplementary examination,
          they will have to repeat the year.
        </li>
      </ol>
    </>
  );
}
