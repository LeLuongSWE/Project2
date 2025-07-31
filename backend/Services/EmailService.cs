using Backend.Settings;
using Microsoft.Extensions.Options;
using MimeKit;
using MailKit.Net.Smtp;

namespace Backend.Services;

public class EmailService : IEmailService
{

    private readonly EmailSettings _smtp;
    
    public EmailService(IOptions<EmailSettings> smtpOptions)
    {
        _smtp = smtpOptions.Value;
    }
    public async Task SendEmailAsync(string to, string subject, string htmlBody)
    {
        var msg = new MimeMessage();
        msg.From.Add(MailboxAddress.Parse(_smtp.From));
        msg.To.Add(MailboxAddress.Parse(to));
        msg.Subject = subject;
        msg.Body = new TextPart("html") { Text = htmlBody };

        using var smtp = new SmtpClient();
        await smtp.ConnectAsync(_smtp.Host, _smtp.Port, MailKit.Security.SecureSocketOptions.StartTls);
        await smtp.AuthenticateAsync(_smtp.User, _smtp.Pass);
        await smtp.SendAsync(msg);
        await smtp.DisconnectAsync(true);
    }
}