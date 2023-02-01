using Domain;
using FluentValidation;

namespace Application.Activities.Validator
{
    public class ActivityValidator:AbstractValidator<Activity>
    {
        public ActivityValidator()
        {
           RuleFor(x=>x.Title).NotEmpty(); 
           RuleFor(x=>x.Description).NotEmpty(); 
           RuleFor(x=>x.Date).NotEmpty(); 
           RuleFor(x=>x.City).NotEmpty(); 
           RuleFor(x=>x.Venue).NotEmpty(); 
        }
    }
}