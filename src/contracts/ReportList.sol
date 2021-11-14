pragma solidity >=0.4.21 <0.6.0;

contract ReportList {
    uint public reportCount = 0 ;

    struct Report {
        uint id;
        uint patientID;
        uint hospitalID;
        string hospitalName;
        string patientName;
        string disease;
        string description;
        string medicine;

        // bool verify;
        
    }

    mapping(uint => Report) public Reports;

    constructor() public {
        createReport("hospital name", "patient name", "disease", "descpriction", "paracetamol", 123,321);
    }

    function createReport(
        string memory _hospitalName,
        string memory _patientName,
        string memory _disease,
        string memory _description,
        string memory _medicide,
        uint  _patientID,
        uint  _haspitalID
        ) public {

        reportCount++;
        Reports[reportCount] = Report(reportCount, _patientID, _haspitalID, _hospitalName, _patientName, _disease, _description, _medicide);

    }




    
}