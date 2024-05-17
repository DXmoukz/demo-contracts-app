using demo_contracts_app.Server.Controllers;
using demo_contracts_app.Server.Models;
using demo_contracts_app.Server.Data;
using Xunit;
using Moq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace demo_contracts_test_project
{
    public class ContractsControllerTests
    {
        [Fact]
        public async Task GetContracts_ReturnsAllContracts()
        {
            // Arrange
            var options = new DbContextOptionsBuilder<MyDbContext>()
                .UseInMemoryDatabase("TestDatabase")
                .Options;

            var mockContext = new Mock<MyDbContext>(options);
            mockContext.Setup(c => c.Contracts).Returns(new Mock<DbSet<Contract>>().Object); // Ensure Contracts property is properly initialized

            var controller = new ContractsController(mockContext.Object);

            //Add contracts Test 1
            // Act
            var result1 = await controller.PostContract(new Contract
            {
                AuthorName = "Test",
                LegalEntityName = "Test",
                Description = "Test"
            });
            var result2 = await controller.PostContract(new Contract
            {
                AuthorName = "Test2",
                LegalEntityName = "Test2",
                Description = "Test2"
            });

            // Assert
            var actionResult1 = Assert.IsType<ActionResult<Contract>>(result1);
            Assert.IsType<CreatedAtActionResult>(actionResult1.Result); // Updated assertion

            var actionResult2 = Assert.IsType<ActionResult<Contract>>(result2);
            Assert.IsType<CreatedAtActionResult>(actionResult2.Result); // Updated assertion

            //Get Contracts Test 2
            // Act
            var result = await controller.GetContracts();

            //// Assert
            var actionResult = Assert.IsType<ActionResult<IEnumerable<Contract>>>(result);
            var returnValue = Assert.IsType<OkObjectResult>(actionResult.Result);
            var returnedContracts = Assert.IsAssignableFrom<IEnumerable<Contract>>(returnValue.Value);
            Assert.Equal(2, returnedContracts.Count());

            // Write similar tests for other action methods (GetContract, PutContract, PostContract, DeleteContract)
        }
    }
}