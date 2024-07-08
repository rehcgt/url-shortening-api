public class shortUrls
{
    public int Id { get; set; }
    public string Url { get; set; } = string.Empty;
    public string shortUrl { get; set; } = string.Empty;
    public string buttonText { get; set; } = "Copy";
    public string additionalButtonClass { get; set; } = "bg-cyan";
    public bool isDisabled { get; set; } = false;
}