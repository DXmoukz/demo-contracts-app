namespace demo_contracts_app.Server.Models
{
    public class Contract
    {
        public int Id { get; set; } // Unique identifier
        public string AuthorName { get; set; }
        public string LegalEntityName { get; set; }
        public string Description { get; set; } // Free-text field describing the legal entity
        public DateTime CreatedDate { get; set; }
        public DateTime? UpdatedDate { get; set; } // Nullable DateTime for updated date

        // Constructor to initialize CreatedDate
        public Contract()
        {
            CreatedDate = DateTime.UtcNow;
        }

        // Constructor with parameters
        public Contract(string authorName, string legalEntityName, string description)
        {
            AuthorName = authorName;
            LegalEntityName = legalEntityName;
            Description = description;
            CreatedDate = DateTime.UtcNow;
        }
    }
}
